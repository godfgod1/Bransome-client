/* type */

export const ACTIONS = {};
export const NEXT_SLIDE = "NEXT_SLIDE";
export const PREV_SLIDE = "PREV_SLIDE";
export const SEARCH = "SEARCH";
export const LOADING = "LOADING";
/* ACTIONS */

// const a = () => {};

// const b = () => {};

// export const actionCreators = { a, b };

export const search = (value) => (dispatch) => {
  dispatch({
    type: SEARCH,
    payload: value,
  });
};

export const setLoanding = () => {
  return {
    type: LOADING,
  };
};
