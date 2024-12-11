import React from 'react'
import ImageShowcase from '../components/ImageShowcase';

const page = () => {
  const images = [
    {
      src: '/Photos/1.jpg',
      alt: 'Image 1',
      title: 'Image 1 Title',
      description: 'Image 1 description',
    },
    {
      src: '/Photos/1.jpg',
      alt: 'Image 2',
      title: 'Image 2 Title',
      description: 'Image 2 description',
    },
    {
      src: '/Photos/1.jpg',
      alt: 'Image 3',
      title: 'Image 3 Title',
      description: 'Image 3 description',
    },
    {
      src: '/Photos/2.jpeg',
      alt: 'Image 1',
      title: 'Image 1 Title',
      description: 'Image 1 description',
    },
    {
      src: '/Photos/2.jpeg',
      alt: 'Image 2',
      title: 'Image 2 Title',
      description: 'Image 2 description',
    },
    {
      src: '/Photos/2.jpeg',
      alt: 'Image 3',
      title: 'Image 3 Title',
      description: 'Image 3 description',
    },
  ];
  return (
    <ImageShowcase images={images} />
  )
}

export default page
