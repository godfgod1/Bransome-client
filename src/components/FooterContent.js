import github from "../logos/github_logo.png";
import googlePlus from "../logos/google.png";
import apple from "../logos/apple.png";

const FooterContent = () => {
  return (
    <footer id="footer_container">
      <div className="footer_text_area">
        <p className="footer_text1">Bransom v.Demo</p>
        <p className="footer_text2">
          All About Brand! - Sangun Lee, Sunghyun Hong, Seonah Park, Sungwoo Lee
        </p>
        <p className="footer_text3">2021. Bgle all rights reserved.</p>
      </div>
      <div className="footer_btn_box">
        <a
          className="social_btn"
          href="https://github.com/codestates/Bransome-client"
        >
          <img className="github_btn" src={github} />
        </a>
        <a className="social_btn" href="https://www.google.co.kr/">
          <img className="google_btn" src={googlePlus} />
        </a>
        <a className="social_btn" href="https://www.apple.com/kr">
          <img className="apple_btn" src={apple} />
        </a>
      </div>
    </footer>
  );
};

export default FooterContent;
