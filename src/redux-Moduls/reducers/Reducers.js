import { combineReducers } from "redux";
import searchReducers from "./searchReducers";
import authModalReducers from "./authModalReducers";

/* 작성예시
 */
const rootReducer = combineReducers({
  brandSearch: searchReducers,
  authModalReducers,
});

export default rootReducer;
