import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BlurCircle from "../../utils/BlurCircle";
import { showsData } from "../../data/showsData";
import MovieCard from "../MovieCard/MovieCard";

const FeatureSection = () => {
  return (
    <div className="px-6 md:px-16 xl:px-44 overflow-hidden">
      <div className="relative flex items-center justify-between pt-20 pb-10">
        <p className="text-gray-300 font-medium text-lg">Now Showing</p>
        <BlurCircle top="0" right="-80px" />
        <Link
          to="/movies"
          className="group flex items-center gap-2 text-sm text-gray-300 cursor-pointer"
        >
          View All
          <ArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5" />
        </Link>
      </div>
      <div className="flex flex-wrap gap-8 max-sm:justify-center mt-8">
        {showsData.slice(0, 4).map((show) => (
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>
      <div className="flex justify-center mt-20">
        {/* <button className="bg-primary text-white px-10 py-3 text-sm rounded-md hover:bg-primary/80 transition font-medium cursor-pointer">
          Show More
        </button> */}
        <Link
          to="/movies"
          onClick={() => {
            scrollTo(0, 0);
          }}
          className="bg-primary text-white px-10 py-3 text-sm rounded-md hover:bg-primary/80 transition font-medium cursor-pointer"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default FeatureSection;
