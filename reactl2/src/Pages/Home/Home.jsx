import React, { useState } from "react";
import { shoe1, shoe2, shoe3 } from "../../assets/assets";
import { Button } from "../../components";
import { statistics } from "..";

const images = [
  {
    id: 1,
    url: shoe1,
  },
  {
    id: 2,
    url: shoe2,
  },
  {
    id: 3,
    url: shoe3,
  },
];

const Home = () => {
  const [image, setImage] = useState(images?.[0]?.url);
  return (
    <div className="w-full h-full pb-20">
      <div className="w-11/12 flex items-center justify-center mx-auto">
        <div className="w-full border">
          <p className="text-2xl text-secondary mt-10">Our Summer Collection</p>

          <h1 className="text-7xl font-bold mt-10">New Collection</h1>
          <h1 className="text-7xl font-bold text-primary mt-5">Converse</h1>
          <p className="text-secondary mt-10 text-xl w-3/4 leading-10">
            Discover stylish Converse arrivals, quality comfort, and innovation
            for your active life.
          </p>

          <Button
            value="Shop Now"
            className="w-fit bg-primary text-white flex items-center gap-x-3 mt-10 rounded-full px-5 py-2.5"
            icon={true}
          />
        </div>

        <div className="w-full relative bg-gray-50">
          <img src={image} alt="" className="w-full h-full object-contain" />

          <div className="absolute -bottom-14 cursor-pointer w-full flex items-center justify-center gap-x-5">
            {images.map((val) => {
              return (
                <div
                  key={val.id}
                  className={`w-40 h-32 rounded-xl overflow-hidden border ${
                    image === val.url ? "border-primary" : ""
                  }`}
                  onClick={() => setImage(val.url)}>
                  <img
                    src={val.url}
                    alt=""
                    className="w-full
         h-full object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-start items-start flex-wrap   gap-16 -bottom-[18%] sm:left-[4%] max-sm:px-6 absolute">
          {statistics.map((stat) => (
            <div key={stat.value}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
