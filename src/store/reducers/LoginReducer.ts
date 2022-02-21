import {ILoginState} from "../states/LoginState";
import {ILoginAction} from "../actions/LoginAction";
import {LoginType} from "../types/LoginType";

const initLoginState:ILoginState = {
    login: false
};

const login = (state:ILoginState = initLoginState, action:ILoginAction):ILoginState => {
    switch (action.type) {
        case LoginType.LOGIN:
            return {
                ...state,
                ...action.data,
            };
        case LoginType.LOGOUT:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
}

export default login;
