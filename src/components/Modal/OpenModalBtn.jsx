import React from "react";
// import { motion } from "framer-motion";
import "./OpenModalBtn.css";

const OpenModalBtn = ({ handleClick }) => {
  return (
    <button
      className="modal__button"
      onClick={handleClick}
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.9 }}
    >
      Open modal
    </button>
  );
};

export default OpenModalBtn;
