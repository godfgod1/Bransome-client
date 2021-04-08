import { combineReducers } from "redux";
import slideReducer from "./slideReducer";
const initialState = require("./initialState");
/* 작성예시

import 리듀서명 from "./리듀서"

const rootReducer = combineReducers({
 리듀서명,
});

*/
const rootReducer = combineReducers({});

export default rootReducer;
