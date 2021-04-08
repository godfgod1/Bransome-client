import React from "react";
import netflix from "../images/test.netflix.png";
import eye from "../images/eye.icon.svg";
import heart from "../images/heart.icon.svg";
import save from "../images/save.icon.svg";

import "../css/BrandInfo.css";
import BrandInfoContentsBox from "./BrandInfoContentsBox.js";

const BrandInfo = () => {
  return (
    <div className="wrap">
      <section className="logo">
        <img id="brand-logo" src={netflix} alt="netflix"></img>
      </section>

      <section id="contents-top">
        <div className="contents-menu">
          <button className="content-subject-button">히스토리</button>
          <button className="content-subject-button">차트</button>
          <button className="content-subject-button">인사이트</button>
        </div>
        <div className="contents-action">
          <div id="views">1.8k</div>
          <button type="button" className="btn_action" id="eye">
            <img src={eye} alt="eye" />
          </button>
          <button type="button" className="btn_action" id="heart">
            <img src={heart} alt="heart" />
          </button>
          <button type="button" className="btn_action" id="save">
            <img src={save} alt="save" />
          </button>
        </div>
      </section>
      <BrandInfoContentsBox />
    </div>
  );
};

export default BrandInfo;
