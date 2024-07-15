// scripts/deploy.js
async function main() {
    const LiberteTechTokenTest = await ethers.getContractFactory('LiberteCoin')
    console.log('Deploying Liberte Coin...')
    const liberteTechTokenTest = await upgrades.deployProxy(
        LiberteTechTokenTest,
        {
            initializer: 'initialize',
        }
    )
    console.log('Liberte Coin deployed to:', liberteTechTokenTest.target)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
