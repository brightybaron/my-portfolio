// src/ImageSlider.js
import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full mx-auto overflow-hidden">
      <div className="relative h-[25vh] lg:h-[55vh] sm:h-[30vh] w-full lg:w-3/4 mx-auto">
        <img
          src={images[currentIndex].src}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />

        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 sm:left-1 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-2 py-1 text-sm sm:text-2xl"
        >
          ❮
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 sm:right-1 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-2 py-1 text-sm sm:text-2xl"
        >
          ❯
        </button>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-gray-100/75 backdrop-blur-md px-4 py-1 rounded-full border">
          <div className="flex flex-row gap-6 justify-center">
            <div>
              <small class="text-gray-700 text-xs">Speed</small>
              <span class="text-gray-800 block">
                {images[currentIndex].speed}
              </span>
            </div>
            <div>
              <small class="text-gray-700 text-xs">Aperture</small>
              <span class="text-gray-800 block">
                {"f/" + images[currentIndex].aperture}
              </span>
            </div>
            <div>
              <small class="text-gray-700 text-xs">ISO</small>
              <span class="text-gray-800 block">
                {images[currentIndex].iso}
              </span>
            </div>
            <div>
              <small class="text-gray-700 text-xs">Camera</small>
              <span class="block text-gray-800 whitespace-nowrap">
                {images[currentIndex].camera}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
