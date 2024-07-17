require('@nomicfoundation/hardhat-ethers')
require('@openzeppelin/hardhat-upgrades')
require('@nomicfoundation/hardhat-verify')
require('dotenv').config()

const POLYGON_SCAN_KEY = process.env.POLYGON_SCAN_KEY
const ETHER_SCAN_KEY = process.env.ETHER_SCAN_KEY

module.exports = {
    solidity: '0.8.20',
    networks: {
        sepolia: {
            url: process.env.SEPOLIA_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
        mainnet: {
            url: process.env.MAINNET_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
        polygon: {
            url: process.env.POLYGON_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
    },
    etherscan: {
        apiKey: {
            sepolia: ETHER_SCAN_KEY,
            polygon: POLYGON_SCAN_KEY,
        },
    },
}
