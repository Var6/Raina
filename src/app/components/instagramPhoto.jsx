import React from 'react';

const InstagramPhoto = ({ photoUrl, caption }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <img
        src={photoUrl}
        alt={caption}
        className="w-full h-full object-cover"
      />
      <p className="text-sm text-gray-600 mt-2">{caption}</p>
    </div>
  );
};

export default InstagramPhoto;