import React from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";

const VideoCarousel = () => {
  const videoUrls = [
    {
      url: "https://youtu.be/-eTMqXZlXSw?si=5xpNvdPV3gfJBUWS",
      title: "LAST MAN STANDING!!",
      description: "Sen Jellesi 1v3 against G2",
    },
    {
      url: "https://youtu.be/LfXKFPRBGAY?si=fva5T5hjs6drvsb-",
      title: "BEST LORD STEAL",
      description: "Lord Steal by Albertt in MPL ID",
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
      className="bg-one text-2xl uppercase"
      style={{ width: "100%", overflow: "hidden" }}>
      <Slider {...settings} style={{ maxWidth: "100%", overflow: "hidden" }}>
        {videoUrls.map((video) => (
          <div key={video.url}>
            <ReactPlayer
              url={video.url}
              width="100%"
              height={`calc(100vw * (${(0.6 * 9) / 16}))`}
              controls
            />
            <h2 className="font-bold font-palanquin text-primary">
              {video.title}
            </h2>
            <p className="font-bold font-palanquin text-primary ">
              {video.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel;
