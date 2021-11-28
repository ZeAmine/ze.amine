import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
import "./Modal.css";
import { useGlobalContext } from "../../context";

const Modal = ({ isOpen }) => {
  // const modalVariant = {
  //   initial: { opacity: 0 },
  //   isOpen: { opacity: 1 },
  //   exit: { opacity: 0 },
  // };
  //
  // const containerVariant = {
  //   initial: { width: "40%", height: "40%", transition: { type: "spring" } },
  //   isOpen: { width: "50%", height: "50%" },
  //   exit: { width: "40%", height: "40%" },
  // };

  const { toggleCursor, selected } = useGlobalContext();

  return (
    // <AnimatePresence>
    <>
      {isOpen && (
        <div
          // initial={"initial"}
          // animate={"isOpen"}
          // exit={"exit"}
          // variants={modalVariant}
          className="overlay"
        >
          <div
            //variants={containerVariant}
            className="modal_img_container"
            onMouseEnter={toggleCursor}
            onMouseLeave={toggleCursor}
          >
            {selected === 4 ? (
              <img
                src={process.env.PUBLIC_URL + `/assets/imgs/projects/img4.png`}
                alt="affiche Eclipse"
                className="modal__img"
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + `/assets/imgs/projects/img5.png`}
                alt="affiche Eclipse"
                className="modal__img"
              />
            )}
          </div>
        </div>
      )}
    </>
    // </AnimatePresence>
  );
};

export default Modal;
