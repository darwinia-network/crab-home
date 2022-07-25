import BigNumber from "bignumber.js";

/**
 * This method will format your big number into your required precision.
 *
 * -minDecimals is set to zero, no extra zeros will be appended on the
 * number if it doesn't have any decimals, example:- if your value is
 * '2000000' the output will be '2,000,000'. If you want it to append some
 * decimals then minDecimals should be set, example:- if your value is
 * '2000000' the output will be '2,000,000.00'.
 *
 * -maxDecimals will round up your value to the specified decimal places, example
 * if you set maxDecimals to 0, miDecimals set at 0 and your value is
 * '2000000.523', the output will be '2,000,001'
 *
 */
export const formatBalance = (balance: string, minDecimals = 0, maxDecimals = 20): string => {
  try {
    const result = new BigNumber(balance).toFormat();
    const hasDecimal = result.includes(".");
    if (!hasDecimal) {
      if (minDecimals === 0) {
        // no unnecessary decimal needed to be appended
        return result;
      }
      // some zeros need to be appended after the decimal
      return `${result}.${"0".repeat(minDecimals)}`;
    }
    /* there are some decimals, check if they are the enough decimal points */
    const decimalPoints = result.split(".")[1].length;
    if (decimalPoints < minDecimals) {
      // some more zeros need to be appended after the decimal
      const requiredZeros = minDecimals - decimalPoints;
      return `${result}${"0".repeat(requiredZeros)}`;
    }

    if (decimalPoints > maxDecimals) {
      /* round it to the required decimal points */
      return new BigNumber(balance).toFormat(maxDecimals);
    }

    return result;
  } catch (error) {
    // console.log("formatBalance", error);
    return "-";
  }
};

export const isValidEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
