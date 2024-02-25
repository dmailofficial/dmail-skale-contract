import { ethers } from "hardhat";

async function main() {

  const signer = (await ethers.getSigners())[0]
  console.log('signer.address', signer.address)
  // return
  //https://bscscan.com/address/0x14bc911B9c030e96B97E59D72350389c03E67Cd4#code
  const lzShitcoinGoerli = await ethers.deployContract("DmailAirdrop", ["0xcC6f1e1B87cfCbe9221808d2d85C501aab0B5192", "0x935918103688d46a859508230097b172022Daf4E"]);

  await lzShitcoinGoerli.waitForDeployment();
  console.log(`lzShitcoin deployed to ${lzShitcoinGoerli.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
