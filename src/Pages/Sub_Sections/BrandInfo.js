import {
  NavLink as Link,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import React, { useState } from "react";

import netflix from "../../images/test.netflix.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faHeart } from "@fortawesome/free-regular-svg-icons";

import {
  faBookmark as faBookUnMark,
  faHeart as faUnHeart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

import history from "./BrandInfoHistory";
import chart from "./BrandInfoChart";
import insight from "./BrandInfoInsight";

import "../../css/BrandInfo.css";

const BrandInfo = ({ match }) => {
  const [bookmark, setBookmark] = useState(false);

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };

  const [heart, setHeart] = useState(false);

  const handleHeart = () => {
    setHeart(!heart);
  };
  const [brand, setBrand] = useState({});
  return (
    <div className="wrap">
      <section className="logo">
        <img id="brand-logo" src={netflix} alt="netflix"></img>
      </section>
      <Router>
        <section id="contents-top">
          <div className="contents-menu">
            <Link to={`${match.url}`} className="brandinfo-history">
              <button className="content-subject-button" renderAs="button">
                <span>히스토리</span>
              </button>
            </Link>

            <Link to={`${match.url}/chart`} className="brandinfo-chart">
              <button className="content-subject-button">주가 차트</button>
            </Link>
            <Link to={`${match.url}/insight`} className="brandinfo-insight">
              <button className="content-subject-button">인사이트</button>
            </Link>
          </div>
          <div className="contents-action">
            <div className="views">15.8k</div>
            <div className="eyeIcon">
              <FontAwesomeIcon icon={faEye} />
            </div>

            {/* 하트 온, 오프 */}
            <div className="heartIcon" onClick={handleHeart}>
              {heart ? (
                <FontAwesomeIcon className="heartIconOn" icon={faUnHeart} />
              ) : (
                <FontAwesomeIcon icon={faHeart} />
              )}
            </div>

            {/* 북마크 온, 오프 */}
            <div className="bookmarkIcon" onClick={handleBookmark}>
              {bookmark ? (
                <FontAwesomeIcon icon={faBookUnMark} />
              ) : (
                <FontAwesomeIcon icon={faBookmark} />
              )}
            </div>
          </div>
        </section>
        <Switch>
          <Route path={`${match.url}`} exact component={history} />
          <Route path={`${match.url}/chart`} component={chart} />
          <Route path={`${match.url}/insight`} component={insight} />
        </Switch>
      </Router>
    </div>
  );
};

export default BrandInfo;
