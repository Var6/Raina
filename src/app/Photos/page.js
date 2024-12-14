import React from 'react'
import Photoview from '../components/photoview';

const page = () => {
  const photos = [
    { url: 'https://www.instagram.com/p/DB9BkuLvThI/?img_index=1' },
    { url: 'https://www.instagram.com/p/DB9BkuLvThI/?img_index=2' },
    { url: 'https://www.instagram.com/p/DB9BkuLvThI/?img_index=3' },
  ];
  
  return (
    <div>
      <Photoview photos={photos}/>
    </div>
  )
}

export default page
