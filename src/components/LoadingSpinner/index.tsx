import "./styles.scss";

const LoadingSpinner = () => {
  return (
    <div className={"spinner-wrapper"}>
      <div className={"spinner-ball"} />
      <div className={"spinner-text"}>Loading...</div>
    </div>
  );
};

export default LoadingSpinner;
