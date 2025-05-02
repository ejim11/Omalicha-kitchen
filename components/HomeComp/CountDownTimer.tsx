"use client";
import { useState, useEffect } from "react";

const CountDownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set default target date to 7 days from now if not provided
    const target = targetDate
      ? new Date(targetDate).getTime()
      : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).getTime();

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        // Timer expired
        clearInterval(intervalId);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetDate]);

  // Add leading zero for single-digit numbers
  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="flex bg-white text-black  w-[15rem] justify-center py-[1.5rem]  font-inter items-center">
      <div className="text-[1.4rem]  mr-[0.5rem]">
        {formatTime(timeLeft.days)}
      </div>
      :
      <div className="text-[1.4rem]  mx-[0.5rem]">
        {formatTime(timeLeft.hours)}
      </div>
      :
      <div className="text-[1.4rem]  mx-[0.5rem]">
        {formatTime(timeLeft.minutes)}
      </div>
      :
      <div className="text-[1.4rem]  ml-[0.5rem]">
        {formatTime(timeLeft.seconds)}
      </div>
    </div>
  );
};

export default CountDownTimer;
