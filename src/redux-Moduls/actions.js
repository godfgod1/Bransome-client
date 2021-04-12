/* type */

export const ACTIONS = {};
export const NEXT_SLIDE = "NEXT_SLIDE";
export const PREV_SLIDE = "PREV_SLIDE";
export const SEARCH = "SEARCH";
export const LOADING = "LOADING";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const GOOGLE_OAUTH2 = "GOOGLE_OAUTH2";
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

export const openModal = () => {
  console.log("openModal");
  return {
    type: OPEN_MODAL,
    payload: true,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
    payload: false,
  };
};
