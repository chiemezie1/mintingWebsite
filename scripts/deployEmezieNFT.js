const { ethers } = require("hardhat");
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await ethers.getSigners();

  const emezieNFT = await hre.ethers.getContractFactory("EmezieNFT");
  const EmezieNFT = await emezieNFT.deploy();

  await emezieNFT.deployed();
  console.log("emezieNFT deployed to:", emezieNFT.address)

  const data = {
    address: emezieNFT.address,
    abi: JSON.parse(emezieNFT.interface.format('json'))
  }

  //This writes the ABI and address to the emezieNFT.json
  fs.writeFileSync('./client/src/contract/emezieNFT.json', JSON.stringify(data))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
