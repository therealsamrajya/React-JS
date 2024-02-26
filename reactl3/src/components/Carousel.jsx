import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css";
import { fifaa, gow } from "../assets/assets";

const Carousel = () => {
  const slides = [
    {
      image: fifaa,
      title: "FC24",
      description: "Immerse yourself into the World of Competitve football",
      url: "https://example.com/page1", // URL for Image 1
    },
    {
      image: gow,
      title: "God of War : Ragnarok",
      description: "Embrace the winter as the judgment is there",
      url: "https://example.com/page2", // URL for Image 2
    },
    // Add more slides as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleReadMoreClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="w-full lg:w-[70%]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="relative" key={index}>
            <img src={slide.image} alt={slide.title} className="w-full" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-secondary bg-opacity-50 text-white">
              <h2 className="text-xl font-bold">{slide.title}</h2>
              <p className="text-sm">{slide.description}</p>
              <button
                className="bg-second text-black px-4 py-2 mt-2"
                onClick={() => handleReadMoreClick(slide.url)}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
