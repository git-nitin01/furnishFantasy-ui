import React, { useState, useEffect } from 'react';

const ImageLoader = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % 4) + 1);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <img
        src={`src/assets/loader/image-${currentImage}.png`}
        alt="Loading..."
        className="inline z-1 h-20 w-20 ml-[-5.85rem]"
      />
  );
};

export default ImageLoader;
