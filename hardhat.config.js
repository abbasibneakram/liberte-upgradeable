require('@nomicfoundation/hardhat-ethers')
require('@openzeppelin/hardhat-upgrades')
require('@nomicfoundation/hardhat-verify')
require('dotenv').config()

module.exports = {
    solidity: '0.8.20',
    networks: {
        sepolia: {
            url: process.env.RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
}
