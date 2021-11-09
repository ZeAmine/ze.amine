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
    <div
      className="app-cursor"
      style={{ mixBlendMode: cursor.active ? "difference" : "" }}
    >
      <svg
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 2.5 : 1})`,
          stroke: cursor.active ? "" : "#fc480e",
          strokeWidth: 1.5,
          fill: cursor.active ? "white" : "transparent",
          transition: "transform .2s ease-in-out",
          mixBlendMode: "difference",
          pointerEvents: "none",
        }}
      >
        <circle cx="25" cy="25" r="8" />
      </svg>
    </div>
  );
};

export default Cursor;
