import React, { useState } from "react";
import { trailerData } from "../../data/trailerData";
import BlurCircle from "../../utils/BlurCircle";
import { PlayCircleIcon } from "lucide-react";

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(trailerData[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-5xl mx-auto">
        Trailers
      </p>

      <div className="relative mt-6">
        <BlurCircle top="-100px" right="-100px" />

        {/* Responsive Video Container */}
        <div className="relative w-full max-w-5xl mx-auto pt-[40%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={currentTrailer.videoUrl}
            title="YouTube video player"
            aria-controls="false"
            width={"100%"}
            height={"100%"}
          ></iframe>
        </div>
      </div>

      {/* Trailer Switch Buttons */}
      <div className="group grid grid-cols-4 gap-4 mt-8 md:gap-8 max-w-3xl mx-auto">
        {
          trailerData.map((trailer)=>(
            <div key={trailer.image} onClick={()=> setCurrentTrailer(trailer)} className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition cursor-pointer">
              <img src={trailer.image} alt="" className="rounded-lg w-full h-full object-cover brightness-75" />
              <PlayCircleIcon strokeWidth={1.6} className="absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2"/>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default TrailerSection;
