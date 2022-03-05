import {ILoginAction} from "../actions/LoginAction";
import {LoginType} from "../actions/types/LoginType";
import {GlobalState, initGlobalState} from "../states/GlobalState";


const login = (state: GlobalState = initGlobalState, action: ILoginAction): GlobalState => {
    switch (action.type) {
        case LoginType.LOGIN:
            return {
                ...state,
                ...action.data
            }
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
