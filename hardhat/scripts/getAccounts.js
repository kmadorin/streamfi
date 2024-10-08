async function main() {
  const hre = require("hardhat");
  const accounts = await hre.ethers.getSigners();

  console.log("Accounts:");
  accounts.forEach((account, index) => {
    console.log(`${index}: ${account.address}`);
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });