import initialState from "./initialState";
import { NEXT_SLIDE, PREV_SLIDE } from "../Actions";

const slideReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_SLIDE:
      return {
        ...state,
        activeIdx: state.activeIdx + 1,
      };

    case PREV_SLIDE:
      return {
        ...state,
        activeIdx: state.activeIdx - 1,
      };

    default:
      break;
  }
};
