import person1 from "../../../images/profile.jpg";

let rand1 = Math.floor(Math.random() * 79) + 10;
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * 50) + 10;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const comments = [
  {
    commentsTitle: "브랜썸 강력 추천드립니다.",
    profileImg: person1,
    user: "김코딩",
    age: `${getRandomArbitrary()}세`,
    contents:
      "브랜썸을 이용하고 저만의 브랜딩을 하는 것에 큰 도움을 받았습니다. 강력추천드립니다.",
  },
  {
    commentsTitle: "써보니 너무 좋은 것 같습니다.5",
    profileImg: person1,
    user: "박해커",
    age: `${getRandomArbitrary()}세`,
    contents:
      "Best 20 브랜드를 한 눈에 쉽게 볼 수 있어 재미있게 브랜드에 대해 알 수 있어서 좋았습니다~!",
  },
  {
    commentsTitle: "써보니 너무 좋은 것 같습니다.5",
    profileImg: person1,
    user: "최개발",
    age: `${getRandomArbitrary()}세`,
    contents:
      "브랜드 관련 아티클, 인사이트를 보다 쉽고 간편하게 모아서 볼 수 있어 직무 관련 트렌트를 얻을 수 있어서 만족합니다.",
  },
  {
    commentsTitle: "써보니 너무 좋은 것 같습니다.5",
    profileImg: person1,
    user: "이취업",
    age: `${getRandomArbitrary()}세`,
    contents:
      "취업하고자 하는 회사의 브랜드에 대해 쉽게 알 수 있어 취업 준비하는데 큰 도움을 받았습니다.",
  },
  {
    commentsTitle: "써보니 너무 좋은 것 같습니다.5",
    profileImg: person1,
    user: "박해커",
    age: `${getRandomArbitrary()}세`,
    contents:
      "Best 20 브랜드를 한 눈에 쉽게 볼 수 있어 재미있게 브랜드에 대해 알 수 있어서 좋았습니다~!",
  },
  {
    commentsTitle: "써보니 너무 좋은 것 같습니다.5",
    profileImg: person1,
    user: "박해커",
    age: `${getRandomArbitrary()}세`,
    contents:
      "Best 20 브랜드를 한 눈에 쉽게 볼 수 있어 재미있게 브랜드에 대해 알 수 있어서 좋았습니다~!",
  },
];

export default comments;
