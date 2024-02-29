import React from "react";
import { fifaa, gow } from "../assets/assets";

const GamesRank = () => {
  const games = [
    {
      icon: fifaa,
      name: "FC24",
      downloads: 1000,
    },
    {
      icon: gow,
      name: "GOW",
      downloads: 900,
    },
    {
      icon: fifaa,
      name: "RDR",
      downloads: 800,
    },
    {
      icon: gow,
      name: "GTA",
      downloads: 700,
    },
    {
      icon: fifaa,
      name: "FC6",
      downloads: 600,
    },
    {
      icon: fifaa,
      name: "FC24",
      downloads: 1000,
    },
    {
      icon: gow,
      name: "GOW",
      downloads: 900,
    },
    {
      icon: fifaa,
      name: "RDR",
      downloads: 800,
    },
    {
      icon: gow,
      name: "GTA",
      downloads: 700,
    },
  ];

  return (
    <div className=" h-[90%] px-7 max-md:hidden absolute top-11 right-0 bg-primary float-right p-4">
      <h2 className="text-xl font-bold font-mono text-one">
        TOP 10 GAMES BY POPULARITY
      </h2>
      <ol>
        {games.map((game, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 font-bold text-second mb-4">
            <span className="flex-shrink-0">#{index + 1}</span>
            <div className="flex items-center w-20">
              <img
                src={game.icon}
                alt={game.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="font-bold text-second truncate">
                {game.name}
              </span>
            </div>
            <progress
              className="ml-auto pl-3"
              max="1000"
              value={game.downloads}></progress>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GamesRank;
