import rootReducer from "../Reducer";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";

const store = createStore (
    rootReducer,
    compose(
        applyMiddleware(thunk), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store; 