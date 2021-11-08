import React from "react";
import "./cursor.css";
import useMousePosition from "../useMousePosition";
import { useGlobalContext } from "../context";

const Cursor = () => {
  const { cursor } = useGlobalContext();
  const { clientX, clientY } = useMousePosition();

  // const cursorRef = useRef(null);
  // useEffect(() => {
  //   document.addEventListener("mousemove", (event) => {
  //     const { clientX, clientY } = event;
  //     const mouseX = clientX - cursorRef.current.clientWidth / 2;
  //     const mouseY = clientY - cursorRef.current.clientHeight / 2;
  //     cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  //   });
  // }, []);

  return (
    // <div className="app-cursor" ref={cursorRef}>
    //   <div className="app-cursor-inner" />
    // </div>
    <div className="app-cursor">
      <svg
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          pointerEvents: "none",
          left: clientX,
          top: clientY,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 2.5 : 1})`,
          stroke: cursor.active ? "red" : "white",
          strokeWidth: 1,
          fill: "transparent",
          transition: "transform .2s ease-in-out",
        }}
      >
        <circle cx="25" cy="25" r="8" />
      </svg>
    </div>
  );
};

export default Cursor;
