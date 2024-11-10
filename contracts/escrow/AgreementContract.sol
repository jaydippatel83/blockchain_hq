// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0; 
import "./Agreement.sol";
import "./Counter.sol"; // Import Counters library

contract AgreementContract {
    using Counters for Counters.Counter; // Use Counters library

    Agreement[] public agreements;
    Counters.Counter private agreementIds; // Corrected variable name

    mapping(address => Agreement[]) public agreementMap;
    mapping(address => uint256) public agreementImap;

    event CreateAgreement(
        address indexed buyer,
        address indexed seller,
        uint256 price,
        address agreementAddress,
        string title,
        string description
    );

    function agreementCreate(
        address payable _buyer,
        address payable _seller,
        uint256 _price,
        uint256 _statePercent,
        uint256 _sellerPercent,
        string memory _title,
        string memory _description
    ) public {
        Agreement agreement = new Agreement(
            _buyer,
            _seller,
            _price,
            _statePercent,
            _sellerPercent,
            _title,
            _description
        );
        agreements.push(agreement);
        uint256 currentIndex = _agreementIds.current(); // Use the counter correctly
        address agreementAddress = agreement.agreementAddress(); // Corrected spelling
        agreementImap[agreementAddress] = currentIndex;
        _agreementIds.increment(); // Increment the counter
        agreementMap[_buyer].push(agreement);
        agreementMap[_seller].push(agreement);
        emit CreateAgreement(_buyer, _seller, _price, agreementAddress, _title, _description);
    }

    function getAgreementByParties(address _party)
        public
        view
        returns (Agreement[] memory)
    {
        return agreementMap[_party];
    }

    function getAgreementByIndex(uint256 _index)
        public
        view
        returns (Agreement)
    {
        require(_index < agreements.length, "Index out of bounds"); // Added check for index
        return agreements[_index];
    }

    function getAgreementByAddress(address _addr)
        public
        view
        returns (Agreement)
    {
        uint256 idx = agreementImap[_addr];
        require(idx < agreements.length, "Address not found"); // Added check for address
        return agreements[idx];
    }

    function getAllAgreements() public view returns (Agreement[] memory) {
        return agreements;
    }
}