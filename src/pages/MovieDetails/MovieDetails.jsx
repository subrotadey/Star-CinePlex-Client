import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { showsData } from "../../data/showsData";
import { dateTimeData } from "../../data/dateTimeData"; // Assuming you have this data
import BlurCircle from "../../utils/BlurCircle";
import { Heart, HeartIcon, PlayCircleIcon, StarIcon } from "lucide-react";
import timeFormat from "../../lib/timeFormat";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  const fetchMovieDetails = async () => {
    const movieDetails = showsData.find((movie) => movie._id === id);
    setShow({
      movie: movieDetails,
      dateTime: dateTimeData,
    });
  };
  useState(() => {
    fetchMovieDetails();
  }, [id]);
  return show ? (
    <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        <img
          src={show?.movie?.poster}
          alt=""
          className="max-md:mx-auto rounded-xl h-104 max-w-70 object-cover"
        />
        <div className="relative flex flex-col gap-3">
          <BlurCircle top="-100px" left="-100px" />
          <p className="text-primary">ENGLISH</p>
          <h1 className=" text-4xl font-semibold max-w-96 text-balance">
            {show.movie.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-300">
            <StarIcon className="w-5 h-5 text-primary fill-primary" />
            {show.movie.rating.toFixed(1)} User Rating
          </div>
          <p className=" text-gray-400 mt-2 text-sm leading-tight max-w-xl">
            {show.movie.overview}
          </p>
          <p>
            {timeFormat(show.movie.runtime)} .{" "}
            {show.movie.genres.map((genre) => genre.name).join(" | ")} .{" "}
            {new Date(show.movie.releaseDate).getFullYear()}
          </p>
          <div className="flex items-center flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 px-7 py-3 bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95">
                <PlayCircleIcon className="w-5 h-5"/>
              Watch Trailer
            </button>
            <a href="" className="px-10 py-3  bg-primary hover:bg-primary-dull transition rounded-md text-white font-medium cursor-pointer active:scale-95">
              Buy Tickets
            </a>
            <button className="bg-gray-700 p-2.5  transition rounded-full cursor-pointer">
              <HeartIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Loading...</h1>
    </div>
  );
};

export default MovieDetails;
