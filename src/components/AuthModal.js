import { useRef, useCallback, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { GLogin, GLogout } from "./auth/GoogleLogin";
import { KLogin } from "./auth/KakaoLogin";
import { resolveConfig } from "prettier";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const LoginState = ({ login, setLogin }) => {};

const AuthModal = ({ show, setShow }) => {
  const modalRef = useRef();

  const animations = useSpring({
    config: {
      duration: 700,
    },
    opacity: show ? 1 : 0,
    trasnform: show ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShow(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && show) {
        setShow(false);
      }
    },
    [setShow, show],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.addEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {show ? (
        <modal className="modal_container" onClick={closeModal} ref={modalRef}>
          <animated.div style={animations}>
            <section className="modal_item" show={show} data-aos="zoom-in">
              <article className="modal_main_image"></article>
              <article className="modal_contents">
                <div className="login_title">Welcome to Bransome</div>
                {/* {isLogin ? 
                <div>
                  <button>마이페이지<button>
                    <Logout />
                  <div> : <Login />} */}
                <GLogin />
                <KLogin />
                <div className="login_text">
                  SNS계정으로 간편하게 로그인하세요.
                </div>
              </article>
              <button
                className="modal_close_btn"
                aria-label="Close modal"
                onClick={() => setShow((open) => !open)}
              >
                <FontAwesomeIcon className="esc_btn_svg" icon={faTimes} />
              </button>
            </section>
          </animated.div>
        </modal>
      ) : null}
    </>
  );
};

export default AuthModal;
