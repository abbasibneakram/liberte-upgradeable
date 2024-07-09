// scripts/deploy.js
async function main() {
    const LiberteTechTokenTest = await ethers.getContractFactory(
        'LiberteTechTokenTest'
    )
    console.log('Deploying LiberteTechTokenTest...')
    const liberteTechTokenTest = await upgrades.deployProxy(
        LiberteTechTokenTest,
        {
            initializer: 'constructor',
        }
    )
    console.log(
        'LiberteTechTokenTest deployed to:',
        liberteTechTokenTest.target
    )
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
