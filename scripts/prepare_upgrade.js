// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = '0x80B75c3F05db59034e4C633a4D5a7E9aFCe5957C'

    const LiberteTechTokenTestV2 = await ethers.getContractFactory(
        'LiberteTechTokenTestV2'
    )
    console.log('Preparing upgrade...')
    const liberteTechTokenTestV2Address = await upgrades.prepareUpgrade(
        proxyAddress,
        LiberteTechTokenTestV2
    )
    console.log('LiberteTechTokenTestV2 at:', liberteTechTokenTestV2Address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
//0x09c243a628658Ce803fabF8Dd05781EF24aE28Ab new Implementation
//0xff4D20b44dD7a587D70fB08eb435D30D254AC505 proxyAdmin contract
//0x80B75c3F05db59034e4C633a4D5a7E9aFCe5957C proxy contract
//0x83735384D79e63eFCA7D3E810Bc5e7d4aE1C0d4A implementation
