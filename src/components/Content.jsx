import React, { useState } from "react";
import Snowfall from "react-snowfall";

const Content = () => {
  const [position, setPosition] = useState({ top: window.innerHeight / 2 + 200, left: window.innerWidth / 2 + 60 });
  const [quote, setQuote] = useState("Do You Love Me");
  const [display, setDisplay] = useState("");
  const [link, setLink] = useState("i.jpg");

  const moveButton = () => {
    const newTop = Math.random() * window.innerHeight * 0.8;
    const newLeft = Math.random() * window.innerWidth * 0.8;
    setPosition({ top: newTop, left: newLeft });
  };
  const changeData = () => {
    setQuote(`I knew it`);
    setDisplay("hidden");
    setLink("i2.jpg");
  };

  return (
    <div>
      <Snowfall />
      <div className="flex flex-col items-center justify-center">
        <img src={link} className="sm:w-xs w-70 " />

        <span className="text-5xl">{quote}</span>
        <div className={`flex ${display} `}>
          <button onClick={changeData} style={{ top: window.innerHeight / 2 + 200, left: window.innerWidth / 2 - 100 }} className="absolute">
            Yes
          </button>
          <button onMouseEnter={moveButton} style={{ top: position.top, left: position.left }} className="absolute">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
