import React from 'react';

const InstagramVideo = ({ videoUrl, caption }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <video
        src={videoUrl}
        controls
        className="w-full h-full object-cover"
      />
      <p className="text-sm text-gray-600 mt-2">{caption}</p>
    </div>
  );
};

export default InstagramVideo;