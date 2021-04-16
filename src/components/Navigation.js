import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink as Link } from "react-router-dom";
import "../css/AuthModal.css";
import MainLogo from "../logos/기본 로고-003.png";
import { openModal, closeModal } from "../redux-Moduls/actions";
import AuthModal from "./AuthModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 850) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const manageState = () => {
    setOpen((show) => !show);
  };
  const menuItems = [
    {
      title: "Home",
      url: "/",
      cName: "navbar_link_btn",
    },
    {
      title: "Brand",
      url: "/brand",
      cName: "navbar_link_btn",
    },
    {
      title: "Best20",
      url: "/best20",
      cName: "navbar_link_btn",
    },
  ];

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar_box">
      <div className="navbar_container">
        <Link to="/" className="navbar_logo" onClick={closeMobileMenu}>
          <img id="logos" src={MainLogo} />
        </Link>
        <div className="menu_icon" onClick={handleClick}>
          <FontAwesomeIcon
            icon={click ? faUser : faBars}
            className={click ? "icon menu_unknown" : "icon menu_bars"}
          />
        </div>
        <ul className={click ? "nav_menu_box active" : "nav_menu_box"}>
          {menuItems.map((item, idx) => {
            return (
              <li key={idx} className="liitems">
                <Link
                  to={item.url}
                  className={item.cName}
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
          {/* {isLogin ? (
              <div>
                <div>김코딩</div>
                <div>유저이미지</div>
              </div>
            ) : (
              <button className="modal_login_btn" onClick={manageState}>
                로그인
              </button>
            )} */}
          <button className="modal_login_btn" onClick={manageState}>
            로그인
          </button>
          <AuthModal show={open} setShow={setOpen} />
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
