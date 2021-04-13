import { NavLink as Link } from "react-router-dom";

import "../css/best20.css";

import apple from "../images/best20/1.apple.png";
import amazon from "../images/best20/2.amazon.png";
import google from "../images/best20/3.google.png";
import ms from "../images/best20/4.ms.png";

function Best20() {
  return (
    <section className="best_container">
      <div className="best_title_wrap">
        <h1 className="best20">Best20</h1>
        <ul className="best_category_box">
          <li className="best_link_btn best_all_btn">
            <Link to="/best20/all">전체</Link>
          </li>
          <li className="best_link_btn best_elec_btn">
            <Link to="/best20/elec">전자기기</Link>
          </li>
          <li className="best_link_btn best_coffee_btn">
            <Link to="/best20/coffee">커피</Link>
          </li>
          <li className="best_link_btn best_car_btn">
            <Link to="/best20/car">자동차</Link>
          </li>
          <li className="best_link_btn best_it_btn">
            <Link to="/best20/it">IT/미디어</Link>
          </li>
        </ul>
      </div>
      <div className="best_rankings_wrap">
        <ul className="best_rankings_box_one_to_ten">
          <li>
            <div className="ranking">1</div>
            <img className="logo" src={apple} />
            <div className="brand_name">Apple</div>
          </li>
          <li>
            <div className="ranking">2</div>
            <img className="logo" src={amazon} />
            <div className="brand_name">Amazon</div>
          </li>
          <li>
            <div className="ranking">3</div>
            <img className="logo" src={google} />
            <div className="brand_name">Google</div>
          </li>
          <li>
            <div className="ranking">4</div>
            <img className="logo" src={ms} />
            <div className="brand_name">MS</div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Best20;
