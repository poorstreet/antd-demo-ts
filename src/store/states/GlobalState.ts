import {ILoginState, IUser} from "./LoginState";

export interface GlobalState {
    loginInfo: ILoginState
}

export const initGlobalState: GlobalState = {
    loginInfo: {
        login: false
    }
};
