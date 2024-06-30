export const ramaLockAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ramaPriceInUSD_",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "startIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endIndex",
				"type": "uint256"
			}
		],
		"name": "InvalidRange",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "LockPeriodNotOver",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NoRamaLocked",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NoZeroValueLock",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "RamaUnlocked",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "locker_",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "assetAgainstYourInvestment_",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "yourInvestmentInUsd_",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "returnCommitmentValueInUsd_",
				"type": "uint256"
			}
		],
		"name": "Locked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "locker_",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value_",
				"type": "uint256"
			}
		],
		"name": "Unlocked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "returnCommitmentValueInUsd_",
				"type": "uint256"
			}
		],
		"name": "calculateReward",
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
				"name": "startIndex_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endIndex_",
				"type": "uint256"
			}
		],
		"name": "getLockers",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "result",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "userName_",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "user_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "yourInvestmentInUsd_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "returnCommitmentValueInUsd_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startDate_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endDate_",
				"type": "uint256"
			}
		],
		"name": "lock",
		"outputs": [],
		"stateMutability": "payable",
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
		"name": "ramaPriceInUSD",
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
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_",
				"type": "address"
			}
		],
		"name": "totalLockedLengthForUser",
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
		"name": "totalLockersLength",
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
		"name": "totalRamaLocked",
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
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "transferRAMA",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index_",
				"type": "uint256"
			}
		],
		"name": "unlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index_",
				"type": "uint256"
			}
		],
		"name": "unlockForUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "currentRamaPrice_",
				"type": "uint256"
			}
		],
		"name": "updateRamaPriceInUSD",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_",
				"type": "address"
			}
		],
		"name": "user2Locked",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "userName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "yourInvestmentInUsd",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "assetAgainstYourInvestment",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "returnCommitmentValueInUsd",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "returnClaimedValueInRama",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lockedTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "unlockedTime",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isUnlocked",
						"type": "bool"
					}
				],
				"internalType": "struct RamaLocked.Lock",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "startIndex_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endIndex_",
				"type": "uint256"
			}
		],
		"name": "user2LockedList",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "userName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "yourInvestmentInUsd",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "assetAgainstYourInvestment",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "returnCommitmentValueInUsd",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "returnClaimedValueInRama",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lockedTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "unlockedTime",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isUnlocked",
						"type": "bool"
					}
				],
				"internalType": "struct RamaLocked.Lock[]",
				"name": "result",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
] as const