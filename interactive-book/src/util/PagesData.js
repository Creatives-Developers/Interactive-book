export const metaData = [
  {
    id: 1,
    className:'empty-page'
  },
  {
    id: 2,
    video:'bookImages/intro.mp4'
  },
  { id: 3, img: `bookImages/pic-02.png` },
  { id: 4, img: `bookImages/pic-03.jpg` },
  { id: 5, img: `bookImages/pic-04.png` },
  { id: 6, img: `bookImages/pic-05.jpg` },
  { id: 7, img: `bookImages/pic-06.jpg` },
  {
    id: 8,
    img: `bookImages/pic-07.png`,
  },
  {
    id: 9,
    img: `bookImages/pic-08.png`,
    interactions: [
      {
        type: "video",
        className: "video-overlay",
        style: { top: "20%", left: "00%", width: "100%", height: "26%" },
        action: (e, setVideoSource) => {
          setVideoSource("videos/video1.mp4");
        },
      },
      {
        type: "video",
        className: "video-overlay small",
        style: { top: "74%", left: "00%", width: "100%", height: "13%" },
        action: (e, setVideoSource) => {
          setVideoSource("videos/video1.mp4");
        },
      },
    ],
  },
  { id: 10, img: `bookImages/pic-09.jpg` },
  { id: 11, img: `bookImages/pic-10.png` },
  {
    id: 11,
    className:'empty-page'
  },
];
