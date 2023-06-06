import React, { useCallback, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { getLocalResource } from "../util";
import pageFilpSoundFile from "../assets/sounds/page-flip.mp3";
import { metaData } from "../util/PagesData";
import VideoControlIcon from "../assets/icons/video-control.png";
import Video from "../components/Video";
function Home() {
  const [currentVideoSrc, setCurrentVideoSrc] = useState("");
  const flipHandler = useCallback((e) => {
   const pageFileSound = new Audio(pageFilpSoundFile);
    pageFileSound.play();
  }, []);
  return (
    <section className="home-container">
      <h1 className="title">Allergan Magazine</h1>
      <article className="book-container">
        <HTMLFlipBook
          width={200}
          height={500}
          size="stretch"
          autoSize
          onFlip={flipHandler}
          showCover={false}
          drawShadow={false}
          flippingTime={750}
          useMouseEvents={true}
          mobileScrollSupport
          showPageCorners
          usePortrait
          renderOnlyPageLengthChange
        >
          {metaData.map(({ id, className, img, video, interactions }) => (
            <div key={id} className={`page ${className}`}>
              {interactions?.map(
                ({
                  className,
                  type,
                  style,
                  action = () => {},
                  href = "#",
                  text = "",
                }) => (
                  <a
                    href={href}
                    key={className}
                    className={className}
                    style={style}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (type === "video") {
                        action(e, setCurrentVideoSrc);
                      }
                    }}
                  >
                    {text}
                    {type === "video" && (
                      <img src={VideoControlIcon} alt="video control icon" />
                    )}
                  </a>
                )
              )}
              {img && <img src={getLocalResource(img)} alt={img} />}
              {video && (
                <video autoPlay muted loop>
                  <source src={getLocalResource(video)} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </HTMLFlipBook>
      </article>
      <Video
        currentVideoSrc={currentVideoSrc}
        setCurrentVideoSrc={setCurrentVideoSrc}
      />
    </section>
  );
}

export default Home;
