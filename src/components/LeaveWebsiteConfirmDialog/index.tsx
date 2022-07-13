import Dialog from "../Dialog";
import { Component } from "react";

interface Props {
  title: string;
  message: string;
  ok: string;
  cancel: string;
}

interface State {
  isVisible: boolean;
}

class LeaveWebsiteConfirmDialog extends Component<Props, State> {
  private promiseResolve: ((isOK: boolean) => void) | undefined;

  constructor(props: Props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  showDialog(): Promise<boolean> {
    this.setState((oldState) => {
      return {
        ...oldState,
        isVisible: true,
      };
    });
    return new Promise<boolean>((resolve) => {
      this.promiseResolve = resolve;
    });
  }

  private hideDialog() {
    this.setState((oldState) => {
      return {
        ...oldState,
        isVisible: false,
      };
    });
  }

  private onAgree = () => {
    if (!this.promiseResolve) {
      return;
    }
    this.promiseResolve(true);
    this.promiseResolve = undefined;
    this.hideDialog();
  };

  private onDecline = () => {
    if (!this.promiseResolve) {
      return;
    }
    this.promiseResolve(false);
    this.promiseResolve = undefined;
    this.hideDialog();
  };

  render() {
    return (
      <Dialog
        onCloseDialog={() => {
          this.hideDialog();
        }}
        isVisible={this.state.isVisible}
      >
        <div
          className={
            "dialog-wrapper bg-black border-2 border-primary w-[89.33%] max-w-[46.6875rem] p-[1.25rem] lg:px-[5.625rem] lg:py-[3.75rem]"
          }
        >
          <div>
            <div className={"title-2 text-white capitalize"}>{this.props.title}</div>
            <div className={"my-[1.25rem] capitalize "}>{this.props.message}</div>
          </div>
          <div className={"flex gap-x-[1.25rem]"}>
            <button
              onClick={() => {
                this.onAgree();
              }}
              className={"btn capitalize btn-primary border-primary"}
            >
              {this.props.ok}
            </button>
            <button
              onClick={() => {
                this.onDecline();
              }}
              className={"btn capitalize border-primary"}
            >
              {this.props.cancel}
            </button>
          </div>
        </div>
      </Dialog>
    );
  }
}

export default LeaveWebsiteConfirmDialog;
