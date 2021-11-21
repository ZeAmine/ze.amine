import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
import "./Modal.css";

const Modal = ({ handleClose, isOpen }) => {
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
          >
            <img
              src={process.env.PUBLIC_URL + `/assets/imgs/projects/img5.png`}
              alt="affiche Eclipse"
              className="modal__img"
            />
          </div>
          <div className="modal__close" onClick={handleClose}>
            <h3>close</h3>
          </div>
        </div>
      )}
    </>
    // </AnimatePresence>
  );
};

export default Modal;
