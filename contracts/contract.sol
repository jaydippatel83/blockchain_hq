// SPDX-License-Identifier: Unlicenced
pragma solidity ^0.8.0;

contract BlockchainHQ {
    address public owner;
    uint256 public platformFeePercentage = 2; // Platform fee in percentage (2%)

    enum FeeType { PerHalfHour, PerHour, PerDay, PerWeek }

    struct User {
        string name;
        string userAddress;
        bool isRegistered;
    }

    struct Expert {
        bool isRegistered;
        uint256 fee; // Fee in wei for the specified duration
        FeeType feeType;
        uint256 balance; // Balance after platform fee deductions
    }

    struct Question {
        address asker;
        string questionText;
        uint256 consultationId;
        bool answered;
        string answerText;
    }

    struct Consultation {
        address user;
        address expert;
        uint256 startTime;
        uint256 endTime;
        bool isActive;
    }

    mapping(address => User) public users;
    mapping(address => Expert) public experts;
    mapping(uint256 => Question) public questions;
    mapping(uint256 => Consultation) public consultations;
    uint256 public questionCount;
    uint256 public consultationCount;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    event UserRegistered(address user, string name, string userAddress);
    event ExpertRegistered(address expert, uint256 fee, FeeType feeType);
    event ConsultationStarted(uint256 consultationId, address user, address expert, uint256 amountPaid, uint256 endTime);
    event QuestionAsked(uint256 questionId, address asker, uint256 consultationId);
    event QuestionAnswered(uint256 questionId, address expert, string answer);
    event Withdrawal(address expert, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    // Register a user with name and address
    function registerUser(string memory name, string memory userAddress) external {
        require(!users[msg.sender].isRegistered, "User already registered");

        users[msg.sender] = User({
            name: name,
            userAddress: userAddress,
            isRegistered: true
        });

        emit UserRegistered(msg.sender, name, userAddress);
    }

    // Register an expert with a fee and fee type (per half-hour, hour, day, or week)
    function registerExpert(uint256 fee, FeeType feeType) external {
        require(!experts[msg.sender].isRegistered, "Expert already registered");
        require(fee > 0, "Fee must be greater than zero");

        experts[msg.sender] = Expert({
            isRegistered: true,
            fee: fee,
            feeType: feeType,
            balance: 0
        });

        emit ExpertRegistered(msg.sender, fee, feeType);
    }

    // Start a consultation by paying for the specified duration
    function startConsultation(address expert, uint256 duration) external payable {
        require(users[msg.sender].isRegistered, "User must be registered");
        require(experts[expert].isRegistered, "Expert is not registered");

        uint256 requiredFee = calculateFee(expert, duration);
        require(msg.value == requiredFee, "Incorrect payment amount");

        uint256 platformFee = (msg.value * platformFeePercentage) / 100;
        uint256 expertEarnings = msg.value - platformFee;

        // Add earnings to expert's balance
        experts[expert].balance += expertEarnings;

        // Calculate consultation end time based on the duration
        uint256 endTime = block.timestamp + duration;
        
        consultations[consultationCount] = Consultation({
            user: msg.sender,
            expert: expert,
            startTime: block.timestamp,
            endTime: endTime,
            isActive: true
        });

        // Transfer platform fee to the owner
        payable(owner).transfer(platformFee);

        emit ConsultationStarted(consultationCount, msg.sender, expert, msg.value, endTime);
        consultationCount++;
    }

    // Ask a question during an active consultation
    function askQuestion(uint256 consultationId, string memory questionText) external {
        Consultation storage consultation = consultations[consultationId];
        require(consultation.user == msg.sender, "Not your consultation");
        require(block.timestamp <= consultation.endTime, "Consultation has expired");

        questions[questionCount] = Question({
            asker: msg.sender,
            questionText: questionText,
            consultationId: consultationId,
            answered: false,
            answerText: ""
        });

        emit QuestionAsked(questionCount, msg.sender, consultationId);
        questionCount++;
    }

    // Answer a question (only the expert can answer during an active consultation)
    function answerQuestion(uint256 questionId, string memory answerText) external {
        Question storage question = questions[questionId];
        Consultation storage consultation = consultations[question.consultationId];
        require(experts[msg.sender].isRegistered, "Only registered experts can answer");
        require(block.timestamp <= consultation.endTime, "Consultation has ended");
        require(!question.answered, "Question already answered");

        question.answered = true;
        question.answerText = answerText;

        emit QuestionAnswered(questionId, msg.sender, answerText);
    }

    // Expert can withdraw their earnings
    function withdrawEarnings() external {
        Expert storage expert = experts[msg.sender];
        require(expert.isRegistered, "Only registered experts can withdraw");
        require(expert.balance > 0, "No earnings to withdraw");

        uint256 amount = expert.balance;
        expert.balance = 0;

        payable(msg.sender).transfer(amount);

        emit Withdrawal(msg.sender, amount);
    }

    // Set platform fee percentage (only owner)
    function setPlatformFeePercentage(uint256 newFeePercentage) external onlyOwner {
        require(newFeePercentage <= 100, "Fee percentage cannot exceed 100%");
        platformFeePercentage = newFeePercentage;
    }

    // Calculate fee based on expert's rate and requested duration
    function calculateFee(address expert, uint256 duration) public view returns (uint256) {
        Expert storage ex = experts[expert];
        if (ex.feeType == FeeType.PerHalfHour) {
            return (duration / 30 minutes) * ex.fee;
        } else if (ex.feeType == FeeType.PerHour) {
            return (duration / 1 hours) * ex.fee;
        } else if (ex.feeType == FeeType.PerDay) {
            return (duration / 1 days) * ex.fee;
        } else if (ex.feeType == FeeType.PerWeek) {
            return (duration / 1 weeks) * ex.fee;
        }
        return 0;
    }

    // Retrieve question details
    function getQuestion(uint256 questionId) external view returns (Question memory) {
        return questions[questionId];
    }
}
