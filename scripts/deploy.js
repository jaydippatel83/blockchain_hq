const hre = require("hardhat");

async function main() {
  const deployedContract = await hre.ethers.deployContract("BlockchainHQ");
  await deployedContract.waitForDeployment();
  console.log(`QnAPlatform contract deployed to ${deployedContract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});