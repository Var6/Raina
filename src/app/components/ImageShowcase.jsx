import Image from 'next/image'
import React from 'react'

function ImageShowcase({images}) {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {images.map((image, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image src={image.src} alt={image.alt} className="w-full h-64 object-cover" height={1000} width={1000} />
          <div className="p-4 md:p-6 lg:p-8">
            <h3 className="text-lg md:text-xl text-black lg:text-2xl font-bold mb-2">{image.title}</h3>
            <p className="text-sm md:text-base text-black lg:text-lg">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ImageShowcase