import React, { useCallback,useState} from "react";
import HTMLFlipBook from "react-pageflip";
import { getLocalResource } from "../util";
import pageFilpSoundFile from "../assets/sounds/page-flip.mp3";
import { metaData } from "../util/PagesData";
import VideoControlIcon from "../assets/icons/video-control.png";
import DiscardIcon from "../assets/icons/discard-icon.png";
function Home() {
  const [currentVideoSrc,setCurrentVideoSrc]=useState('')
  const flipHandler = useCallback(() => {
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
          showCover={true}
          drawShadow={false}
          flippingTime={750}
          useMouseEvents={true}
          mobileScrollSupport
          showPageCorners
          usePortrait
          renderOnlyPageLengthChange
        >
          {metaData.map(({ id, img, interactions }) => (
            <div key={id} className="page">
              {interactions?.map(
                ({ className, type, style, action=()=>{}, href = "#", text = "" }) => (
                  <a
                    href={href}
                    key={className}
                    className={className}
                    style={style}
                    onClick={(e) => {
                      e.stopPropagation()
                      if (type === "video") {
                        action(e,setCurrentVideoSrc);
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
              {<img src={getLocalResource(img)} alt={img} />}
            </div>
          ))}
        </HTMLFlipBook>
      </article>
      <article className={`video-container ${currentVideoSrc?'visible':''}`} >
        {currentVideoSrc&&<video autoPlay  controls>
           <source src={getLocalResource(currentVideoSrc)} type="video/mp4"/>
        </video>}
        <button className="close-btn" onClick={()=>{setCurrentVideoSrc('')}}>
          <img src={DiscardIcon} alt={'discard-video'}/>
        </button>
      </article>
    </section>
  );
}

export default Home;
