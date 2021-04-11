import {
  NavLink as Link,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import netflix from "../../images/test.netflix.png";
import eye from "../../images/eye.icon.svg";
import heart from "../../images/heart.icon.svg";
import save from "../../images/save.icon.svg";

import history from "./BrandInfoHistory";
import chart from "./BrandInfoChart";
import insight from "./BrandInfoInsight";

import "../../css/BrandInfo.css";

const BrandInfo = ({ match }) => {
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
