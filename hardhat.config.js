/** @type import('hardhat/config').HardhatUserConfig */ 
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.27",
  paths: {
    artifacts: "./src",
  },
  networks: {
    opencampus: {
      url: process.env.RPC_NODE_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      opencampus:  process.env.ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: "opencampus",
        chainId: 656476,
        urls: {
          apiURL: process.env.CUSTOME_API_URL,
          browserURL: process.env.CUSTOME_BROWSER_URL,
        },
      },
    ],
  },
};