export const contractAddress="0x85B6eE037A8E183C502E8Ff17FcC069dd4D5712E";
export const contractABI=[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "consultationId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "expert",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountPaid",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "endTime",
          "type": "uint256"
        }
      ],
      "name": "ConsultationStarted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "expert",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "enum BlockchainHQ.FeeType",
          "name": "feeType",
          "type": "uint8"
        }
      ],
      "name": "ExpertRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "questionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "expert",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "answer",
          "type": "string"
        }
      ],
      "name": "QuestionAnswered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "questionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "asker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "consultationId",
          "type": "uint256"
        }
      ],
      "name": "QuestionAsked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "userAddress",
          "type": "string"
        }
      ],
      "name": "UserRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "expert",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Withdrawal",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "questionId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "answerText",
          "type": "string"
        }
      ],
      "name": "answerQuestion",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "consultationId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "questionText",
          "type": "string"
        }
      ],
      "name": "askQuestion",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "expert",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "duration",
          "type": "uint256"
        }
      ],
      "name": "calculateFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "consultationCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "consultations",
      "outputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "expert",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "startTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endTime",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isActive",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "experts",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isRegistered",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "internalType": "enum BlockchainHQ.FeeType",
          "name": "feeType",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "questionId",
          "type": "uint256"
        }
      ],
      "name": "getQuestion",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "asker",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "questionText",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "consultationId",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "answered",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "answerText",
              "type": "string"
            }
          ],
          "internalType": "struct BlockchainHQ.Question",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "platformFeePercentage",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "questionCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "questions",
      "outputs": [
        {
          "internalType": "address",
          "name": "asker",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "questionText",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "consultationId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "answered",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "answerText",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "internalType": "enum BlockchainHQ.FeeType",
          "name": "feeType",
          "type": "uint8"
        }
      ],
      "name": "registerExpert",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "userAddress",
          "type": "string"
        }
      ],
      "name": "registerUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newFeePercentage",
          "type": "uint256"
        }
      ],
      "name": "setPlatformFeePercentage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "expert",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "duration",
          "type": "uint256"
        }
      ],
      "name": "startConsultation",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "users",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "userAddress",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "isRegistered",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawEarnings",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]