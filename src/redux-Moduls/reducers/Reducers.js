import { combineReducers } from "redux";
import searchReducers from "./searchReducers";

/* 작성예시

import 리듀서명 from "./리듀서"

const rootReducer = combineReducers({
 리듀서명,
});

*/
const rootReducer = combineReducers({ searchReducers });

export default rootReducer;
