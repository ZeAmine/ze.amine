import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../../context";
import { gsap } from "gsap";
import { Power4 } from "gsap/gsap-core";
import "./Modal.css";

const Modal = ({ isOpen }) => {
  const { toggleCursor, selected, handleOpenModal } = useGlobalContext();
  const modalRef = useRef(null);

  useEffect(() => {
    gsap.from(modalRef.current, {
      y: 180,
      opacity: 0.5,
      ease: Power4.easeOut,
    });
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="overlay" onClick={() => handleOpenModal(false)}>
          <div
            className="modal_img_container"
            onMouseEnter={toggleCursor}
            onMouseLeave={toggleCursor}
          >
            {selected === 7 ? (
              <img
                src={process.env.PUBLIC_URL + `/assets/imgs/projects/eclipse_poster.png`}
                alt="affiche Eclipse"
                className="modal__img"
                ref={modalRef}
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + `/assets/imgs/projects/eclipse_poster2.png`}
                alt="affiche Eclipse"
                className="modal__img"
                ref={modalRef}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
