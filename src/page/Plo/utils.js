import { formatBalance } from "@polkadot/util";
import BN from "bn.js";
import Bignumber from "bignumber.js";

const TEN = new Bignumber(10);
const DECIMAL = 12;
const UNIT = "KSM";
// const DECIMAL = 9;
// const UNIT = "CRING";

export function formatKSMBalance(balance, withUnit = UNIT) {
  return formatBalance(balance, {
    decimals: DECIMAL,
    withUnit: withUnit,
    forceUnit: "-",
  }).replaceAll(",", "");
}

export function inputToKSMBN(value) {
  if (!value) return new BN(0);

  try {
    return new BN(
      TEN.pow(new Bignumber(DECIMAL)).times(value).toFixed(0, 1)
    );
  } catch (error) {
    console.log("utils error:", error);
    return new BN(0);
  }
}

export function inputFormatBalance(balance) {
  return new Bignumber(balance.toString()).div(TEN.pow(DECIMAL)).toString();
}
