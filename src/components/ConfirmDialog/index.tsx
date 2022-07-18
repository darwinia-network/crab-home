import BaseDialog from "../BaseDialog";
import { Component } from "react";

type DialogType = 1 | 2;

interface Props {
  title?: string;
  message: string;
  ok?: string;
  cancel?: string;
  type: DialogType;
}

interface State {
  isVisible: boolean;
}

class ConfirmDialog extends Component<Props, State> {
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

  getDialogByType(type: DialogType) {
    switch (type) {
      case 1: {
        return this.getTypeOneDialog();
      }
      case 2:
      default: {
        return this.getTypeTwoDialog();
      }
    }
  }

  render() {
    const DialogContent = this.getDialogByType(this.props.type);

    return (
      <BaseDialog
        onCloseDialog={() => {
          this.hideDialog();
        }}
        isVisible={this.state.isVisible}
      >
        {DialogContent}
      </BaseDialog>
    );
  }

  getTypeOneDialog() {
    const okButton = this.props.ok ? (
      <button
        onClick={() => {
          this.onAgree();
        }}
        className={"btn capitalize btn-primary border-primary"}
      >
        {this.props.ok}
      </button>
    ) : null;

    const cancelButton = this.props.cancel ? (
      <button
        onClick={() => {
          this.onDecline();
        }}
        className={"btn capitalize border-primary"}
      >
        {this.props.cancel}
      </button>
    ) : null;

    const title = this.props.title ? <div className={"title-2 text-white capitalize"}>{this.props.title}</div> : null;

    return (
      <div
        className={
          "dialog-wrapper bg-black border-2 border-primary w-[89.33%] max-w-[46.6875rem] p-[1.25rem] lg:px-[5.625rem] lg:py-[3.75rem]"
        }
      >
        <div>
          {title}
          <div className={"my-[1.25rem] capitalize "}>{this.props.message}</div>
        </div>
        <div className={"flex gap-x-[1.25rem]"}>
          {okButton}
          {cancelButton}
        </div>
      </div>
    );
  }

  getTypeTwoDialog() {
    const cancelButton = this.props.cancel ? (
      <button
        onClick={() => {
          this.onDecline();
        }}
        className={"btn capitalize border-primary"}
      >
        {this.props.cancel}
      </button>
    ) : null;

    const title = this.props.title ? <div className={"title-2 text-white capitalize"}>{this.props.title}</div> : null;

    return (
      <div className={"dialog-wrapper bg-black w-[89.33%] max-w-[46.6875rem]"}>
        <div className={"border-2 border-primary p-[1.25rem] lg:px-[5.625rem] lg:py-[3.75rem]"}>
          {title}
          <div className={"my-[1.25rem] capitalize "}>{this.props.message}</div>
        </div>
        <div className={"flex justify-center mt-[1.25rem]"}>{cancelButton}</div>
      </div>
    );
  }
}

export default ConfirmDialog;
