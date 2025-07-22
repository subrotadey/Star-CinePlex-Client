import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dateTimeData } from "../../data/dateTimeData";
import { showsData } from "../../data/showsData";
import Loading from "../../components/Loading/Loading";
import { ArrowRightIcon, ClockIcon } from "lucide-react";
import isoTimeFormat from "../../utils/isoTimeFormat";
import BlurCircle from "../../utils/BlurCircle";
import screenImage from "../../assets/svg/screenImage.svg";
import toast from "react-hot-toast";

const SeatLayout = () => {
  const groupRows = [
    ["A", "B"],
    ["C", "D"],
    ["E", "F"],
    ["G", "H"],
    ["I", "J"],
  ];
  const { id, date } = useParams(); // Assuming you want to use id and date from the URL params
  console.log(id, date);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);

    const navigate = useNavigate();

  // Function to handle seat selection
  const getShow = async () => {
    // Fetch show details based on id and date
    const show = showsData.find((movie) => movie._id === id);
    if (show) {
      setShow({
        movie: show,
        dateTime: dateTimeData,
      });
    }
  };

  // Function to handle seat clicks
  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      // Check if time is selected first 【30607.92, type: source】
      toast.error("Please select time first"); // Notification to select time 【30607.92, type: source】
      return;
    }

    // if (occupiedSeats.includes(seatId)) { // Check if seat is already booked 【30645.2, type: source】
    //   toast.error('This seat is already booked'); // Notification if seat is booked 【30678.24, type: source】
    //   return;
    // }

    if (selectedSeats.includes(seatId)) {
      // If seat is already selected, unselect it
      setSelectedSeats((prev) => prev.filter((seat) => seat !== seatId)); // Remove seat from selectedSeats 【30678.24, type: source】 【30716.638, type: source】
    } else {
      // If seat is not selected, select it
      if (selectedSeats.length >= 5) {
        // Limit to 5 seats 【30645.2, type: source】
        toast.error("You can only select five seats"); // Notification if limit exceeded 【30645.2, type: source】
        return;
      }
      setSelectedSeats((prev) => [...prev, seatId]); // Add seat to selectedSeats 【30716.638, type: source】
    }
  };

  // Helper function to render seats
  const renderSeats = (row, count = 9) => (
    <div key={row} className="flex gap-2 mt-2">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {Array.from({ length: count }, (_, i) => {
          const seatId = `${row}${i + 1}`;
          return (
            <button
              key={seatId}
              onClick={() => handleSeatClick(seatId)}
              className={`w-8 h-8 rounded border border-primary/60 cursor-pointer ${
                selectedSeats.includes(seatId) ? "bg-primary text-white" : ""
              }`}
            >
              {seatId}
            </button>
          );
        })}
      </div>
    </div>
  );

  useEffect(() => {
    getShow();
  }, []);

  return show ? (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50">
      <div className="w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30">
        <p className="text-lg font-semibold px-6">Available Times</p>
        <div className="mt-5 space-y-1">
          {show.dateTime[date].map((item) => (
            <div
              key={item.time}
              onClick={() => setSelectedTime(item)}
              className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${
                selectedTime?.time === item.time
                  ? "bg-primary text-white"
                  : "hover:bg-primary/20"
              }`}
            >
              <ClockIcon className="w-4 h-4" />
              <p className="text-sm">{isoTimeFormat(item.time)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex flex-col max-md:mt-16 items-center">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle bottom="0" right="0" />
        <h1 className="text-2xl font-semibold mb-4"> Select Your Seat</h1>
        <img src={screenImage} alt="screen" />
        <p className="uppercase text-gray-400 text-sm mb-6">screen side</p>

        <div className="flex flex-col items-center mt-10 text-xs text-gray-300">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6">
            {groupRows[0].map((row) => renderSeats(row))}
          </div>
          <div className="grid grid-cols-2 gap-11">
            {groupRows.slice(1).map((group, idx) => (
              <div key={idx}>{group.map((row) => renderSeats(row))}</div>
            ))}
          </div>
        </div>
        <button 
        onClick={() => navigate('/my-bookings')}
        className="flex items-center gap-1 mt-20 px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer active:scale-95">Proceed to Checkout
            <ArrowRightIcon strokeWidth={3} className="h-4 w-4"/>
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default SeatLayout;
