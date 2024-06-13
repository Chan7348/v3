
import { viem } from "hardhat";
import { vars } from "hardhat/config";

async function main() {

  const WETH = await viem.deployContract("WETH");
  console.log(
    `deployed to ${WETH.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
