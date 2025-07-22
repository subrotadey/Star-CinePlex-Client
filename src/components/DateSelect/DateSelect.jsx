import React, { useState } from "react";
import BlurCircle from "../../utils/BlurCircle";
import { ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DateSelect = ({ dateTime, id }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleBook = () => {
    if (!selectedDate) {
      return toast.error("Please select a date first.");
    }
    navigate(`/movies/${id}/${selectedDate}`);
    scrollTo(0, 0);
  };
  return (
    <div id="dateSelect" className="pt-30">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-lg">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle top="100px" right="0px" />
        <div className="text-lg font-semibold">
          <p>Choose Date</p>
          <div className="flex items-center gap-6 mt-5 text-sm">
            <ChevronsLeftIcon width={28} />
            <span className="grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4">
              {dateTime &&
                Object.keys(dateTime).map((date) => (
                  <button
                    onClick={() => setSelectedDate(date)}
                    key={date}
                    className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer ${
                      selectedDate === date
                        ? "bg-primary text-white"
                        : "border border-primary/70"
                    }`}
                  >
                    <span>{new Date(date).getDate()}</span>
                    <span>
                      {new Date(date).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </span>
                  </button>
                ))}
            </span>
            <ChevronsRightIcon width={28} />
          </div>
        </div>
        <button
          onClick={handleBook}
          className="bg-primary text-white px-8 py-2 mt-6 rounded hover:bg-primary/90 transition-all cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DateSelect;
