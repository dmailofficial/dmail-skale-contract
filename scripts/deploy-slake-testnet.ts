import { ethers } from "hardhat";

async function main() {

  const signer = (await ethers.getSigners())[0]
  console.log('signer.address', signer.address)
  const c = await ethers.deployContract("Dmail", {gasLimit: 3000000});
  await c.waitForDeployment();
  console.log(`lzShitcoin deployed to ${c.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
