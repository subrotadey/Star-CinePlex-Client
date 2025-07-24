import React from "react";
import { useRouteError } from "react-router-dom";

const DisplayError = () => {
  const error = useRouteError();
  return (
    <div className="align-center flex h-screen justify-center text-center">
      <div>
        <p className="text-red-500 text-6xl uppercase mb-16">Refresh</p>
        <p className="text-red-500">Something Went Wrong!</p>
        <p className="text-red-400">{error.statusText || error.message}</p>
        <h4 className="text-3xl"> Please and log back in </h4>
      </div>
    </div>
  );
};

export default DisplayError;
