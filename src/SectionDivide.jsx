import React from "react";
import "./App.css";
import video from "./assets/video.mp4";

export const SectionDivide = () => {
  return (
    <div className="Section-Hero">
      <div className="hero1">
        <h1>
          Goodbye manual notes. Hello OtterPilot<sup>TM</sup>{" "}
        </h1>
        <div className="Text">
          Get an AI meeting assistant that records audio, writes notes,
          automatically captures slides, and generates summaries.
        </div>
        <a type="button" href="#" className="button">
          {" "}
          Start for Free
        </a>
      </div>
      {/* <div className="video-container"> */}
        <video className="video" controls>
          <source src={video} type="video/mp4" />
        </video>
      {/* </div> */}
    </div>
  );
};
