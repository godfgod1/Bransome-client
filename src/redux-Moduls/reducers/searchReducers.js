import { SEARCH } from "../actions";
import initialState from "./initialState";

const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH: {
      const { value } = action;
      const works = state.contents.filter((val) => val.includes(value));
      return { ...state, value, works };
    }
    default:
      return state;
  }
};

export default searchReducers;
