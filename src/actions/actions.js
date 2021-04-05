import TYPES from "./types";

//작성예시

export default function increase() {
  return {
    type: TYPES.INCREASE, // 액션 객체에는 type 값이 필수입니다.
  };
}

// 화살표 함수로 작성하는 것이 더욱 코드가 간단하기에,
// 이렇게 쓰는 것을 추천합니다.
export const decrease = () => ({
  type: TYPES.DECREASE,
});

export const changeText = (text) => ({
  type: TYPES.CHANGE_TEXT,
  text, // 액션안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있습니다.
});

export const addToList = (item) => ({
  type: TYPES.ADD_TO_LIST,
  item,
});

//============================여기부터 작성=============================//
