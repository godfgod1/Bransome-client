import { useRef, useCallback, useEffect } from "react";
import { useSpring, animated } from "react-spring";

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
            <section className="modal_item" show={show}>
              <article className="modal_main_image"></article>
              <article className="modal_contents"></article>
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
