"use client";
import MeetingTypeList from "@/components/MeetingTypeList";
import React, { useEffect, useState } from "react";

const Home = () => {
    const [time, setTime] = useState(
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
    const [date, setDate] = useState(
      new Intl.DateTimeFormat("en-IN", { dateStyle: "full" }).format(new Date())
    );
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(
          new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit"})
        );
      }, 1000); 
  
      return () => clearInterval(interval); 
    }, []);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};
// [background-image:url('/images/hero-background.png')]

export default Home;
