import React from "react";
import Data from "../../Sourceses/Sourceses";
import "./Video.css";

const Video = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row p-0 video-holder">
        <div className="video-overlay">
          <img src="play-button.png"></img>
        </div>
        <video src={Data.work.video} controls>
        </video>
      </div>
    </div>
  );
};
export default Video;
