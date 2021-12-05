import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Designer", "Developer", "Mentor"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <h2>Hi! I'm</h2>
          <h1>Sreenivas</h1>
          <h3>
            AI <span ref={textRef}></span>
          </h3>
          <h2 className="company">
            ManageArtworks
          </h2>
          <a href="#works">
          <img src="assets/down.png" alt="" />
        </a>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/me.png" alt="" />
        </div>
        
      </div>
    </div>
  );
}
