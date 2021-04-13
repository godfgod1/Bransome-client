import { useRef, useCallback, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import GoogleLogin from "react-google-login";
import { resolveConfig } from "prettier";

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

  const responseGoogle = (response) => {
    // console.log(response);
    const profile = response.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  };

  return (
    <>
      {show ? (
        <modal className="modal_container" onClick={closeModal} ref={modalRef}>
          <animated.div style={animations}>
            <section className="modal_item" show={show}>
              <article className="modal_main_image"></article>
              <article className="modal_contents">
                <div>간편 로그인</div>
                <GoogleLogin
                  clientId="208996301348-dk6n07licdht39sujvffjqifo0m35tal.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </article>
              <button
                className="modal_close_btn"
                aria-label="Close modal"
                onClick={() => setShow((open) => !open)}
              >
                Close
              </button>
            </section>
          </animated.div>
        </modal>
      ) : null}
    </>
  );
};

export default AuthModal;
