import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showsData } from "../../data/showsData";
import { dateTimeData } from "../../data/dateTimeData"; // Assuming you have this data
import BlurCircle from "../../utils/BlurCircle";
import {
  Heart,
  HeartIcon,
  Loader2,
  PlayCircleIcon,
  StarIcon,
} from "lucide-react";
import timeFormat from "../../lib/timeFormat";
import DateSelect from "../../components/DateSelect/DateSelect";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loading from "../../components/Loading/Loading";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();

  const fetchMovieDetails = async () => {
    const show = showsData.find((movie) => movie._id === id);
    if (show) {
      setShow({
        movie: show,
        dateTime: dateTimeData,
      });
    }
  };
  useState(() => {
    fetchMovieDetails();
  }, [id]);
  return show ? (
    <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        <img
          src={show?.movie?.poster_path}
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
            {show.movie.vote_average.toFixed(1)} User Rating
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
              <PlayCircleIcon className="w-5 h-5" />
              Watch Trailer
            </button>
            <a
              href="#dateSelect"
              className="px-10 py-3  bg-primary hover:bg-primary-dull transition rounded-md text-white font-medium cursor-pointer active:scale-95"
            >
              Buy Tickets
            </a>
            <button className="bg-gray-700 p-2.5  transition rounded-full cursor-pointer">
              <HeartIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <p className="text-lg font-medium mt-20">Your Favorite Cast</p>
      <div className="overflow-x-auto no-scrollbar mt-8 pb-4">
        <div className="flex items-center gap-4 w-max px-4">
          {show.movie.casts.slice(0, 11).map((cast, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={cast.profile_path}
                alt={cast.name}
                className="w-24 h-20 md:h-20 aspect-square rounded-full object-cover"
              />
              <p className="text-center text-xs mt-3 font-medium">
                {cast.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <DateSelect dateTime={show.dateTime} id={id} />

      <p className="text-lg font-medium mt-20 mb-8"> You May Also Like</p>
      <div className="flex flex-wrap max-sm:justify-center gap-8">
        {showsData.slice(0, 4).map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-20">
        <button
          onClick={() => {
            navigate("/movies");
            scrollTo(0, 0);
          }}
          className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer "
        >
          Load More
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
