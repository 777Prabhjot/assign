"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const timelineData = [
  {
    id: 1,
    year: "Start from 2023",
    title: "Your AI Prompt Companion",
    description: "Explore multiple prompt directions with branching.",
  },
  {
    id: 2,
    year: "Q1 2024 - Inception",
    title: "Project Kick-off & Research",
    description: "Defined core features and technology stack.",
  },
  {
    id: 3,
    year: "Q2 2024 - Development",
    title: "Alpha Version Launch",
    description: "First functional prototype shared with internal testers.",
  },
  {
    id: 4,
    year: "Q3 2024 - Refinement",
    title: "Beta Program",
    description: "Opened up to a wider audience for feedback and improvements.",
  },
  {
    id: 5,
    year: "Q4 2024 - Growth",
    title: "Public Launch",
    description: "Official release on all major platforms. The journey begins!",
  },
];

const TimelineCard = ({ data, isActive, isLeft }) => {
  const { year, title, description } = data;

  return (
    <div
      className={`
        relative  ${isLeft && "left-[65px]"} ${
        !isLeft && "right-[65px]"
      } w-full transform transition-all duration-500 ease-in-out
        ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-50 blur-sm"}
      `}
    >
      <div className="p-6 rounded-2xl border border-white/20 bg-purple-900/30 backdrop-blur-lg">
        <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
        <p className="text-purple-200/80 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-purple-300">{year}</span>
          <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center bg-purple-900/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white/70"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef(null);
  const itemRefs = useRef([]);

  const handleScroll = useCallback(() => {
    const listElement = listRef.current;
    if (!listElement) return;
    const viewportCenterY =
      listElement.scrollTop + listElement.clientHeight / 2;
    let closestItemIndex = -1;
    let minDistance = Infinity;
    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const itemCenterY = item.offsetTop + item.clientHeight / 2;
      const distance = Math.abs(viewportCenterY - itemCenterY);
      if (distance < minDistance) {
        minDistance = distance;
        closestItemIndex = index;
      }
    });
    if (closestItemIndex !== -1) {
      setActiveIndex(closestItemIndex);
    }
  }, []);

  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) {
      listElement.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => listElement.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <div className="relative w-full h-screen bg-[#03061C] flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,_rgba(99,58,162,0.4),_rgba(26,16,60,0)_60%)]"></div>

      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-white/10"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-400 border-2 border-purple-200 shadow-lg"></div>

      <div
        ref={listRef}
        className="w-full h-full overflow-y-scroll scroll-smooth scrollbar-hide"
      >
        <div className="relative flex flex-col items-center gap-16 py-[50vh]">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`
                  w-[80%] flex
                  ${isLeft ? "justify-end" : "justify-start"}
                  max-lg:justify-start /* On mobile, all cards are on the right */
                `}
              >
                <div
                  className={`
                    w-1/2 
                    ${isLeft ? "pr-8" : "pl-8"}
                    max-lg:w-full max-lg:pl-12 max-lg:pr-4 /* On mobile, cards take full width with padding */
                  `}
                >
                  <TimelineCard
                    data={item}
                    isActive={index === activeIndex}
                    isLeft={isLeft}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
