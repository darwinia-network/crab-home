export const toShortAddress = (_address) => {
  const address = (_address || "").toString();

  return address.length > 13
    ? `${address.slice(0, 6)}…${address.slice(-6)}`
    : address;
};
