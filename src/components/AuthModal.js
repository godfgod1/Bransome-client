import { useRef, useCallback, useEffect } from "react";

const AuthModal = ({ show, setShow }) => {
  const modalRef = useRef();

  const animnate = {
    duration: 250,
    opacity: show ? 1 : 0,
    trasnform: show ? `translateY(0%)` : `translateY(100%)`,
  };

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
          <section className="modal_item">
            <article className="modal_main_image"></article>
            <article className="modal_coontents"></article>
          </section>
        </modal>
      ) : null}
    </>
  );
};

export default AuthModal;
