import {createStore, applyMiddleware} from 'redux'
import loginReducer from './reducers/LoginReducer'
import {logger} from "./middleware/middleware";

const store = createStore(loginReducer, applyMiddleware(logger))
export default store
