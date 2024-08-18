require("@nomicfoundation/hardhat-toolbox");
// Load environment variables from .env file
require("dotenv").config(); 

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
	const balance = await ethers.provider.getBalance(account.address);
	console.log(`Account: ${account.address}, Balance: ${ethers.formatEther(balance)}`);
  }
});

const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
	networks: {
		vbase: {
			url: process.env.BASE_VIRTUAL_TESTNET_RPC_URL,
			chainId: 8453,
			accounts: [DEPLOYER_PRIVATE_KEY],
		}
	},
	ignition: {
		requiredConfirmations: 1,
	}
};
