import { LOADING, SEARCH } from "../actions";
import initialState from "./initialState";

const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH: {
      return { ...state, value: action.payload, loading: false };
    }
    case LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};

export default searchReducers;
