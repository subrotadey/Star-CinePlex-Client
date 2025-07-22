import React, { useEffect, useState } from "react";
import { bookingData } from "../../data/bookingData";
import Loading from "../../components/Loading/Loading";
import BlurCircle from "../../utils/BlurCircle";

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMyBookings = async () => {
    setBookings(bookingData);
    setIsLoading(false);
  };

  useEffect(() => {
    getMyBookings();
  }, []);
  return !isLoading ? (
    <div className="relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]">
      <BlurCircle top="100px" left="100px"/>
      <div>
        <BlurCircle bottom="0" left="600px"/>
      </div>
      <h1 className="text-lg font-semibold mb-4">My Bookings</h1>
    </div>
  ) : (
    <Loading />
  );
};

export default MyBookings;
