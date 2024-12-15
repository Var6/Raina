import React from 'react'
import { photosData } from '@/Data/PostLinks';
import PhotoViewer from '../components/photoview';
const page = () => {
  return (
    <div className='grid grid-cols lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-2'>
    {photosData.map((photo, index) => (
       <PhotoViewer key={index} mainPhotoLink={photo.mainPhotoLink} subPhotoLinks={photo.subPhotoLinks} caption={photo.caption} />
    ))}
  </div>
  )
}

export default page
