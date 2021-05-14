import BigNumber from "bignumber.js";

export function formatBalance(balanceStr, decimals = 9) {
  try {
    const BigNumberBalance = new BigNumber(balanceStr);
    return BigNumberBalance.div(new BigNumber(10).pow(decimals)).toFormat(0);
  } catch (error) {
    console.log("formatBalance", error);
    return "-";
  }
}
