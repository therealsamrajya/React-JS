import React from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";

const VideoCarousel = () => {
  const videoUrls = [
    {
      url: "https://youtu.be/-eTMqXZlXSw?si=5xpNvdPV3gfJBUWS",
    },
    {
      url: "https://youtu.be/LfXKFPRBGAY?si=fva5T5hjs6drvsb-",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
  };

  return (
    <div
      className="bg-primary text-2xl uppercase text-second"
      style={{ width: "100%", overflow: "hidden" }}>
      <h1 className="lg:text-4xl text-3xl font-bold ">
        Upload your greatness now!
      </h1>
      <p>Upload your Highlights today!</p>

      <Slider {...settings} style={{ maxWidth: "100%", overflow: "hidden" }}>
        {videoUrls.map((video) => (
          <div key={video.url}>
            <ReactPlayer
              url={video.url}
              width="100%"
              height={`calc(80vw * (${(0.5 * 1) / 1}))`}
              controls
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel;
