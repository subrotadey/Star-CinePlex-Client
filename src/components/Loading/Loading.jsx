import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (!loading) {
    return <Loading/>;
  }
  return (
    <div className="w-full  flex items-center justify-center ">
      <SkeletonTheme
        baseColor="#1E1E1E" // dark gray base to blend with #090908
        highlightColor="#2c2c2c" // subtle highlight
      >
        <div className="w-9/12 min-h-screen px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="bg-[#121212] p-3 rounded-xl shadow border border-[#2a2a2a]"
            >
              {/* Thumbnail */}
              <Skeleton height={180} borderRadius={12} />

              {/* Title */}
              <div className="mt-4">
                <Skeleton height={20} width="90%" />
              </div>

              {/* Channel Info */}
              <div className="mt-3 flex items-start gap-3">
                <Skeleton circle height={40} width={40} />
                <div className="flex-1">
                  <Skeleton height={14} width="70%" />
                  <Skeleton height={12} width="50%" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default Loading;
