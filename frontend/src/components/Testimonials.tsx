"use client";

import { useEffect, useState, useRef } from "react";

export default function Testimonials() {
  const [showConfetti, setShowConfetti] = useState(false);
  const awardRef = useRef(null); // The awardRef is still used for the intersection observer, so it remains.

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !showConfetti) {
          setShowConfetti(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = awardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [showConfetti]);
  
  return (
    <div id="testimonials" className="mx-auto max-w-7xl pt-20 lg:pt-[8rem] select-none lg:border-x border-zinc-200 overflow-hidden">
      {/* Section Header with Floating Messages */}
      <div className="mx-auto max-w-3xl text-center px-5 lg:px-0 relative">
        {/* Floating iMessage-style testimonials - hidden on mobile */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {/* Top left messages */}
          <div className="absolute -top-8 -left-32 island-float-1">
            <div className="bg-gray-200 rounded-[20px] rounded-bl-[4px] px-4 py-2 max-w-[200px] shadow-sm">
              <p className="text-sm text-gray-800">&quot;This is amazing!&quot;</p>
            </div>
            <div className="flex items-center mt-1 ml-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white font-medium">J</div>
              <span className="text-xs text-gray-500 ml-2">James</span>
            </div>
          </div>

          {/* Top right messages */}
          <div className="absolute -top-16 -right-40 island-float-2" style={{animationDelay: '0.5s'}}>
            <div className="bg-pink-500 rounded-[20px] rounded-br-[4px] px-4 py-2 max-w-[220px] shadow-sm">
              <p className="text-sm text-white">&quot;Game changer for HR!&quot;</p>
            </div>
            <div className="flex items-center justify-end mt-1 mr-2">
              <span className="text-xs text-gray-500 mr-2">Sarah</span>
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs text-white font-medium">S</div>
            </div>
          </div>

          {/* Bottom left messages */}
          <div className="absolute top-24 -left-44 island-float-3" style={{animationDelay: '1s'}}>
            <div className="bg-gray-200 rounded-[20px] rounded-bl-[4px] px-4 py-2 max-w-[240px] shadow-sm">
              <p className="text-sm text-gray-800">&quot;So useful for recruiters&quot;</p>
            </div>
            <div className="flex items-center mt-1 ml-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs text-white font-medium">M</div>
              <span className="text-xs text-gray-500 ml-2">Maria</span>
            </div>
          </div>

          {/* Bottom right messages */}
          <div className="absolute top-20 -right-48 island-float-1" style={{animationDelay: '1.5s'}}>
            <div className="bg-blue-500 rounded-[20px] rounded-br-[4px] px-4 py-2 max-w-[200px] shadow-sm">
              <p className="text-sm text-white">&quot;Finally! 🎉&quot;</p>
            </div>
            <div className="flex items-center justify-end mt-1 mr-2">
              <span className="text-xs text-gray-500 mr-2">Alex</span>
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs text-white font-medium">A</div>
            </div>
          </div>

          {/* Middle left */}
          <div className="absolute top-8 -left-56 island-float-2" style={{animationDelay: '2s'}}>
            <div className="bg-gray-200 rounded-[20px] rounded-bl-[4px] px-4 py-2 max-w-[180px] shadow-sm">
              <p className="text-sm text-gray-800">&quot;Love this! 💕&quot;</p>
            </div>
            <div className="flex items-center mt-1 ml-2">
              <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center text-xs text-white font-medium">E</div>
              <span className="text-xs text-gray-500 ml-2">Emma</span>
            </div>
          </div>

          {/* Middle right */}
          <div className="absolute top-32 -right-52 island-float-3" style={{animationDelay: '2.5s'}}>
            <div className="bg-green-500 rounded-[20px] rounded-br-[4px] px-4 py-2 max-w-[190px] shadow-sm">
              <p className="text-sm text-white">&quot;Mind = blown 🤯&quot;</p>
            </div>
            <div className="flex items-center justify-end mt-1 mr-2">
              <span className="text-xs text-gray-500 mr-2">David</span>
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-xs text-white font-medium">D</div>
            </div>
          </div>
        </div>

        <h2 className="text-lg/10 font-base text-zinc-500 uppercase relative z-10">Testimonials</h2>
        <p className="mt-2 text-4xl font-medium tracking-tight text-pretty text-black sm:text-5xl sm:text-balance relative z-10">
          Stop hiring the wrong people.
        </p>
      </div>

      {/* Content Cards with Borders */}
      {/* The award section (and its content, including the image) has been removed */}
      <div className="mt-20 mb-16 lg:mb-0 lg:border-y border-zinc-200">
        
      </div>
    </div>
  );
}