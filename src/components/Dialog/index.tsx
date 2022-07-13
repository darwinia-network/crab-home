import { CSSTransition } from "react-transition-group";

interface Props {
  children: JSX.Element;
  isVisible: boolean;
  onCloseDialog: () => void;
}
const Dialog = ({ children, isVisible, onCloseDialog }: Props) => {
  const closeDialog = () => {
    onCloseDialog();
  };
  return (
    <CSSTransition unmountOnExit={true} classNames={"dialog"} in={isVisible} timeout={500}>
      <div
        onClick={() => {
          closeDialog();
        }}
        className={
          "fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-80 z-[120] flex justify-center items-center"
        }
      >
        <div
          className={"flex justify-center items-center"}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Dialog;
