import React from "react";
import HTMLFlipBook from "react-pageflip";
import { getLocalImageByName } from "../util";
import pageFilpSoundFile from "../assets/sounds/page-flip.mp3";
function Home() {
  const pageFileSound = new Audio(pageFilpSoundFile);
  const images = [
    "bookImages/pic-01.jpg",
    "bookImages/pic-02.jpg",
    "bookImages/pic-03.jpg",
    "bookImages/pic-04.jpg",
    "bookImages/pic-05.jpg",
    "bookImages/pic-06.jpg",
    "bookImages/pic-07.jpg",
    "bookImages/pic-08.jpg",
    "bookImages/pic-09.jpg",
    "bookImages/pic-10.jpg",
  ];
  const flipHandler = () => {
    pageFileSound.play();
  };
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
          {images.map((imgSrc) => (
            <div key={imgSrc} className="page">
              {<img src={getLocalImageByName(imgSrc)} alt={imgSrc} />}
            </div>
          ))}
        </HTMLFlipBook>
      </article>
    </section>
  );
}

export default Home;
