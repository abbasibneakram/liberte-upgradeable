async function main() {
    const proxyAddress = '0x80B75c3F05db59034e4C633a4D5a7E9aFCe5957C'
    const LiberteTechTokenV2 = await ethers.getContractFactory(
        'LiberteTechTokenTestV2'
    )
    console.log('Upgrading LiberteTechToken Proxy...')

    await upgrades.upgradeProxy(proxyAddress, LiberteTechTokenV2)
    console.log('LiberteTechToken has been upgraded')
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
