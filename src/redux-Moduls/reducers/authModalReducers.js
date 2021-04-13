import { OPEN_MODAL, CLOSE_MODAL } from "../actions";
import initialState from "./initialState";

const authModalReducers = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return { ...state, openModalScreen: action.payload };
    }
    case CLOSE_MODAL: {
      return { ...state, openModalScreen: action.payload };
    }
    default:
      return state;
  }
};

export default authModalReducers;
