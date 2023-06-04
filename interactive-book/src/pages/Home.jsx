import React, { useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import { getLocalImageByName } from "../util";
import pageFilpSoundFile from "../assets/sounds/page-flip.mp3";
import { metaData } from "../util/PagesData";
function Home() {
  const pageFileSound = new Audio(pageFilpSoundFile);

  const flipHandler = useCallback(() => {
    pageFileSound.play();
  }, [pageFileSound]);
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
                ({ className, style, action, href = "#", text = "" }) => (
                  <a
                    href={href}
                    key={className}
                    className={className}
                    style={style}
                    onClick={(e) => {
                      if (action) {
                        action();
                      }
                    }}
                  >
                    {text}
                  </a>
                )
              )}
              {<img src={getLocalImageByName(img)} alt={img} />}
            </div>
          ))}
        </HTMLFlipBook>
      </article>
    </section>
  );
}

export default Home;
