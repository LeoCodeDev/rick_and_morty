import React from "react";
import style from "./CursorShip.module.css";
import spaceship from "../../assets/ufo.png";

const CursorShip = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.pageX + 15, y: event.pageY + 15 });
  };

  const handleScroll = () => {
    setPosition({ x: 0, y: 0 });
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    // document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      // document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { x, y } = position;

  return (
    <div className={style.spaceship} style={{ left: x + "px", top: y + "px" }}>
      <img src={spaceship} alt="spaceship" />
    </div>
  );
};

export { CursorShip };
