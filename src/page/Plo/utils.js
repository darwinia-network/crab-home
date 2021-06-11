import { formatBalance, formatNumber } from "@polkadot/util";
import BN from "bn.js";
import Bignumber from "bignumber.js";

const TEN = new Bignumber(10);

export function formatKSMBalance(balance, withUnit = "KSM") {
  return formatBalance(balance, {
    decimals: 12,
    withUnit: withUnit,
    forceUnit: "-",
  }).replaceAll(",", "");
}

export function inputToKSMBN(value) {
  if (!value) return new BN(0);

  try {
    return new BN(
      TEN.pow(new Bignumber(12)).times(value).toFixed(0, 1)
    );
  } catch (error) {
    console.log("utils error:", error);
    return new BN(0);
  }
}

export function inputFormatBalance(balance) {
  return new Bignumber(balance.toString()).div(TEN.pow(12)).toString();
}
