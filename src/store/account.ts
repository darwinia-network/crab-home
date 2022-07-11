import { createContext, Dispatch } from "react";

type ActionType = "CHANGE_NAME";

export interface Action {
  payload: string | Record<string, any>;
  type: ActionType;
}

interface AccountState {
  name?: string;
}

export const accountInitialState: AccountState = {
  name: "Ismail Mbarack",
};

export const accountReducer = (state: AccountState, action: Action): AccountState => {
  switch (action.type) {
    case "CHANGE_NAME": {
      const payload = action.payload as string;
      return {
        ...state,
        name: payload,
      };
    }
    default:
      return state;
  }
};

interface IAccountContext {
  state: AccountState;
  dispatch?: Dispatch<Action>;
}

export const AccountContext = createContext<IAccountContext>({
  state: accountInitialState,
});
