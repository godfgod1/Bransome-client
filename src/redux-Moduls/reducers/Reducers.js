import { combineReducers } from "redux";
import searchReducers from "./searchReducers";

/* 작성예시
 */
const rootReducer = combineReducers({ brands: searchReducers });

export default rootReducer;
