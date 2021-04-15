import React, { Component } from "react";

export class KLogin extends Component {
  componentDidMount() {
    const kakaoScript = document.createElement("script");
    kakaoScript.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.head.appendChild(kakaoScript);

    kakaoScript.onload = () => {
      window.Kakao.init("b84ef6ee9846c4bb065410c473c58cb3");
      window.Kakao.Auth.createLoginButton({
        container: "#kakao-login-btn",
        success: (auth) => {
          console.log("Kakao 로그인 완료", auth);
          window.Kakao.API.request({
            url: "/v2/user/me",
            success: (res) => {
              console.log("Kakao 사용자 정보", res);
            },
            fail: (err) => {
              console.log(err);
            },
          });
        },
        fail: (err) => {
          console.log(err);
        },
      });
    };
  }
  render() {
    return <button type="button" id="kakao-login-btn"></button>;
  }
}
