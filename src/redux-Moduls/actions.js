/* type */

export const ACTIONS = {};
export const NEXT_SLIDE = "NEXT_SLIDE";
export const PREV_SLIDE = "PREV_SLIDE";
export const SEARCH = "SEARCH";
export const LOADING = "LOADING";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const GOOGLE_OAUTH2 = "GOOGLE_OAUTH2";
export const FETCH_BRANDS = "FETCH_BRANDS";
export const FILTER_BRAND_BY_CATEGORY = "FILTER_BRAND_BY_CATEGORY";

export const ADD_BRAND = "ADD_BRAND";
export const REMOVE_BRAND = "REMOVE_BRAND";
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
