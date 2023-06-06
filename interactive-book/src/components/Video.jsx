import React from "react";
import { getLocalResource } from "../util";
import DiscardIcon from "../assets/icons/discard-icon.png";
function Video({ currentVideoSrc, setCurrentVideoSrc }) {
  return (
    <article className={`video-container ${currentVideoSrc ? "visible" : ""}`}>
      {currentVideoSrc && (
        <video autoPlay controls>
          <source src={getLocalResource(currentVideoSrc)} type="video/mp4" />
        </video>
      )}
      <button
        className="close-btn"
        onClick={() => {
          setCurrentVideoSrc("");
        }}
      >
        <img src={DiscardIcon} alt={"discard-video"} />
      </button>
    </article>
  );
}

export default Video;
