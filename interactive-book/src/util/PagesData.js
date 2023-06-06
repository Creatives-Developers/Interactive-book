export const metaData = [
  {
    id: 1,
    img: `bookImages/pic-01.jpg`,
  },
  { id: 2, img: `bookImages/pic-02.png` },
  { id: 3, img: `bookImages/pic-03.jpg` },
  { id: 4, img: `bookImages/pic-04.png` },
  { id: 5, img: `bookImages/pic-05.jpg` },
  { id: 6, img: `bookImages/pic-06.jpg` },
  {
    id: 7,
    img: `bookImages/pic-07.png`,
  },
  {
    id: 8,
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
          setVideoSource("videos/video2.mp4");
        },
      },
    ],
  },
  { id: 91, img: `bookImages/pic-09.jpg` },
  { id: 10, img: `bookImages/pic-10.png` },
];
