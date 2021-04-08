import { NavLink as Link } from "react-router-dom";

import logo from "../logos/bransome3.png";
const Navigation = () => {
  return (
    <nav className="navbar_box">
      <div className="navbar_container">
        <Link to="/" className="navbar_logo">
          <img src={logo} />
        </Link>

        <ul className="navbar_item_box">
          <li className="navbar_item">
            <Link to="/" className="navbar_link_btn navbar_home_btn">
              Home
            </Link>
          </li>
          <li className="navbar_item">
            <Link to="/brand" className="navbar_link_btn navbar_brand_btn">
              Brands
            </Link>
          </li>
          <li className="navbar_item">
            <Link to="/best20" className="navbar_link_btn navbar_best_btn">
              Best20
            </Link>
          </li>
          <li className="navbar_item">
            <Link to="/brandinfo" className="navbar_link_btn navbar_brandinfo_btn">
              brandinfo
            </Link>
            </li>

          <li className="navbar_item">
            <a
              className="navbar_link_btn"
              href="https://github.com/codestates/Bransome-client"
            >
              Blog
            </a>
          </li>
          <li className="navbar_sign_box navbar_item">
            <button className="navbar_sign_in_btn">로그인</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
