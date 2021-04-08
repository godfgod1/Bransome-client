/* type */

export const ACTIONS = {};
export const NEXT_SLIDE = "NEXT_SLIDE";
export const PREV_SLIDE = "PREV_SLIDE";
/* ACTIONS */

// const a = () => {};

// const b = () => {};

// export const actionCreators = { a, b };

const nextSlide = () => {
  return {
    type: NEXT_SLIDE,
    payloads: {
      activeIdx: 0,
      translate: 0,
      transition: 0.45,
    },
  };
};

const prevSlide = () => {
  return {
    type: PREV_SLIDE,
    payloads: {
      activeIdx: 0,
      translate: 0,
      transition: 0.45,
    },
  };
};
export const actionCreators = { nextSlide, prevSlide };
