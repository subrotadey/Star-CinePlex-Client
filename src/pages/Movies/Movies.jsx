import React from "react";
import { showsData } from "../../data/showsData";
import MovieCard from "../../components/MovieCard/MovieCard";
import BlurCircle from "../../utils/BlurCircle";

const Movies = () => {
  return showsData.length > 0 ? (
    <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]:">
        <BlurCircle top="150px" left="0px"/>
        <BlurCircle bottom="50px" right="50px"/>

      <h1 className="text-lg font-medium my-4">Movies</h1>
      <div className="flex flex-wrap max-sm:justify-center gap-8">
        {showsData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold text-center">No Movies Found</h1>
    </div>
  );
};

export default Movies;
