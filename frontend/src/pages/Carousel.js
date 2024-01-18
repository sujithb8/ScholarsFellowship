// src/components/ImageCarousel.js
import React, { useState } from 'react';

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <button onClick={goToPrevSlide}>Previous</button>
      <img src={images[currentIndex]} alt={`slide ${currentIndex}`} />
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
}

export default ImageCarousel;
