import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import getInitState from "./initState";
import rootReducer from "./reducers/root";

const store = createStore(rootReducer, getInitState, composeWithDevTools(applyMiddleware(thunk)))



export default store
