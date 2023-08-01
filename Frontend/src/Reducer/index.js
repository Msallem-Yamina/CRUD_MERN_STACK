import userReducer from "./userReducer";

import { combineReducers }  from 'redux';

const rootReducer = combineReducers ({
        User : userReducer,
});


export default rootReducer;