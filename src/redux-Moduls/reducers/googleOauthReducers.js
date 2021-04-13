import initialState from "./initialState";
import { GOOGLE_OAUTH2 } from "../actions";

const googleOatuhReducers = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_OAUTH2: {
      return { ...state, googleRes: action.googleRes };
    }
    default: {
      return state;
    }
  }
};

export default googleOatuhReducers;
