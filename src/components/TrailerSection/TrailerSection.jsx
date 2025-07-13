import React, { useState } from "react";
import { trailerData } from "../../data/trailerData";
import ReactPlayer from "react-player";
import BlurCircle from "../../utils/BlurCircle";

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(trailerData[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      <div className="relative mt-6">
        <BlurCircle top="-100px" right="-100px" />

        {/* Responsive Video Container */}
        <div className="relative w-full max-w-4xl mx-auto pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={currentTrailer.videoURL}
            title="YouTube video player"
            aria-controls="false"
            width={"100%"}
            height={"100%"}
          ></iframe>
        </div>
      </div>

      {/* Trailer Switch Buttons */}
      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        {trailerData.map((trailer, index) => (
          <button
            key={index}
            onClick={() => setCurrentTrailer(trailer)}
            className={`text-sm px-4 py-2 rounded ${
              trailer.id === currentTrailer.id
                ? "bg-primary text-white"
                : "bg-gray-700 hover:bg-primary text-white"
            }`}
          >
            {trailer.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrailerSection;
