export const isMobile = () => {
  return (
    (/Android|webOS|iPhone|iPad|iPod|ios|BlackBerry/i.test(navigator.userAgent) &&
      !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/)) ||
    window.innerWidth <= 750
  );
};
