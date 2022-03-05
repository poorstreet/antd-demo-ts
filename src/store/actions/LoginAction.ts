import {LoginType} from "./types/LoginType";
import {Dispatch} from "redux";
import {ILoginState, IUser} from "../states/LoginState";

export interface ILoginAction {
    type: LoginType,
    data: ILoginState
}

export const sendLoginAction = (dispatch: Dispatch, user: IUser) => {
    dispatch({type: LoginType.LOGIN, data: {loginInfo: {user, login: true}}})
}

export const sendLogoutAction = (dispatch: Dispatch) => {
    dispatch({type: LoginType.LOGOUT, data: {loginInfo: {user: {}, login: false}}})
}
