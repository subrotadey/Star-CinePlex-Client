import { StarIcon } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
import timeFormat from "../../lib/timeFormat";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-between bg-gray-800 p-3 rounded-2xl hover:-translate-y-1 transition w-66 duration-300">
      <img
        onClick={() => {
          navigate(`/movies/${movie.id}`);
          scrollTo(0, 0);
        }}
        src={movie.backdrop}
        alt=""
        className="rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer"
      />
      <p className="font-semibold mt-2 truncate">{movie.title}</p>
      <p className="text-sm text-gray-400 mt-2">
        {new Date(movie.releaseDate).getFullYear()} .{" "}
        {movie.genres
          .slice(0, 2)
          .map((genre) => genre.name)
          .join(" | ")}{" "}
        . {timeFormat(movie.runtime)} min
      </p>
      <div className="flex items-center justify-between w-full mt-4 pb-3">
        <button
          onClick={() => {
            navigate(`/movie/${movie.id}`);
            scrollTo(0, 0);
          }}
          className="px-4 py-2 text-xs bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
        >
          {" "}
          Buy Tickets
        </button>
        <p className="flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1">
          <StarIcon className="w-4 h-4 text-primary full-primary" />
          {movie.rating.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
