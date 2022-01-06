import { decodeAddress, encodeAddress } from "@polkadot/keyring";
import { hexToU8a, u8aToHex, isHex, formatBalance } from "@polkadot/util";
import { Keyring } from "@polkadot/keyring";
import BN from "bn.js";
import Big from "big.js";
// import { TypeRegistry } from "@polkadot/types";

export const RING_REWARD = 200000000;
export const KTON_REWARD = 8000;
export const BTC_THRESHOLD = 10000; // 10000 DOT
export const DOT_TO_ORIG = new BN("1000000000000"); // 貌似是精度

export const shortAddress = (address = "") => {
  if (address.length && address.length > 12) {
    return `${address.slice(0, 5)}...${address.slice(address.length - 5)}`;
  }
  return address;
};

const MAX_INPUT_DOT = Number(9999999999999);
export const isValidContributeDOTInput = (amount) => !isNaN(amount) && Number(amount) <= MAX_INPUT_DOT;

export const isInsufficientBalance = (availableOrig, needDOT) =>
  Big(availableOrig).lt(Big(Number(needDOT)).mul(DOT_TO_ORIG.toString()));

export const isValidAddressPolkadotAddress = (address) => {
  try {
    encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address));

    return true;
  } catch (error) {
    return false;
  }
};

export const isValidReferralCode = (referralCode) => {
  try {
    const address = encodeAddress(hexToU8a(`0x${referralCode}`));
    return isValidAddressPolkadotAddress(address);
  } catch (error) {
    return false;
  }
};

export const polkadotAddressToPublicKey = (address) => u8aToHex(decodeAddress(address));
export const publicKeyToPolkadotAddress = (publicKey) => {
  try {
    const address = encodeAddress(hexToU8a(publicKey));
    const keyring = new Keyring();
    keyring.setSS58Format(0); // Polkadot format address
    return keyring.addFromAddress(address).address;
  } catch (error) {
    // console.error(error);
    return publicKey;
  }
};

export const polkadotAddressToReferralCode = (address) => polkadotAddressToPublicKey(address);
export const referralCodeToPolkadotAddress = (referralCode) => publicKeyToPolkadotAddress(referralCode);

export const formatBalanceFromOrigToDOT = (origBalance) =>
  formatBalance(BN.isBN(origBalance) ? origBalance : new BN(origBalance), {
    forceUnit: true,
    withUnit: false,
    withSi: false,
    decimals: 12,
  });

export const formatBalanceFromDOTToOrig = (dotBalance) => Big(dotBalance).mul(DOT_TO_ORIG.toString()).toString();
