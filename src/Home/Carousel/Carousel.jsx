import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Link } from "lucide-react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-[100%] mx-auto overflow-hidden">
      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
        <button
          onClick={handlePrev}
          className="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Carousel Content */}
      <div className="relative flex w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full max-h-[700px] overflow-hidden transition-transform duration-500 bg-cover bg-no-repeat"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              backgroundImage: `url(${item?.urlToImage})`,
            }}
          >
            {/* Darkened and Blurred Background */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

            {/* Main Image */}
            <img
              src={item?.urlToImage}
              alt={item?.alt || "Carousel Image"}
              className="relative z-10 w-full h-full object-contain"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/40 w-full h-full top-0 flex items-end justify-start z-50 md:px-[5%] mb:pb-[4%] px-[10%] pb-[4%]">
              <div>
                <h1 className="text-white font-bold md:text-2xl text-xl md:line-clamp-none line-clamp-3">
                  {item?.title}
                </h1>
                {item?.description && (
                  <div className="flex flex-wrap border">
                    <p className="text-gray-400 text-sm line-clamp-1">
                      {item?.description}
                    </p>
                    <button className="underline hover:cursor-pointer z-50">
                      <span>see more</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
