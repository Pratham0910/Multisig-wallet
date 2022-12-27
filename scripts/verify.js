// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
require("@nomiclabs/hardhat-etherscan");

// task1-> task2 -> task3
// "await" it jumps to next task and wait until the task is completed and comes back to previous task
//ethers.js -> Library which allows you to deploy and interact with your smart contract

async function main() {
  const GetterSetter = await hre.ethers.getContractFactory("GetterSetter");
  //this deploy function time
  const getterSetter = await GetterSetter.deploy;
  //deployed the smart contract
  await getterSetter.deploy();
  //print the address of our smart contract
  console.log("GetterSetter deploy to: " + getterSetter.address);
}
main()
  .then(() => process.exit(0));
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
