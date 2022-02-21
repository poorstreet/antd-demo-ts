import {LoginType} from "../types/LoginType";
import {Dispatch} from "redux";
import {IUser} from "../states/LoginState";

export interface ILoginAction {
    type: LoginType,
    data?: any
}

export const doLogin = (dispatch: Dispatch, user: IUser) => {
    dispatch({type: LoginType.LOGIN, data: {user, login: true}})
}
