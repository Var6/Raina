'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { BackgroundGradient } from './box';

const PhotoViewer = ({ mainPhotoLink, subPhotoLinks, caption }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % subPhotoLinks.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + subPhotoLinks.length) % subPhotoLinks.length
    );
  };

  // Handle touch swipe for mobile
  useEffect(() => {
    const handleTouchStart = (e) => {
      const startX = e.touches[0].clientX;

      const handleTouchMove = (moveEvent) => {
        const deltaX = moveEvent.touches[0].clientX - startX;
        if (deltaX > 30) {
          handlePrev(); // Swipe left
        } else if (deltaX < -30) {
          handleNext(); // Swipe right
        }
      };

      imageRef.current.addEventListener('touchmove', handleTouchMove);

      return () => {
        imageRef.current.removeEventListener('touchmove', handleTouchMove);
      };
    };

    imageRef.current && imageRef.current.addEventListener('touchstart', handleTouchStart);

    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener('touchstart', handleTouchStart);
      }
    };
  }, []);

  return (
    <BackgroundGradient className={'relative p-2 flex-col items-center justify-between'} animate={true}>
      <Image
        src={subPhotoLinks[currentIndex]}
        alt={`Photo ${currentIndex + 1}`}
        width={500} // Adjust width as needed
        height={300} // Adjust height as needed
        layout="fixed" 
        objectFit="cover"
        className="rounded-lg mx-auto"
        ref={imageRef} 
      />
      {subPhotoLinks.length > 1 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 flex space-x-[360px]">
          <button
            onClick={handlePrev}
            className="bg-transparent hover:bg-red-500 rounded-full p-2 shadow-md  hover:shadow-lg"
          >
         <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-transparent hover:bg-red-500 rounded-full p-2 shadow-md hover:shadow-lg"
          >
           <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </button>
        </div>
      )}
      <div className='text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-2xl rounded-lg p-3 '> {caption} </div>
    </BackgroundGradient>
  );
};

export default PhotoViewer;