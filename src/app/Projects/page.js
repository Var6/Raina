import React from 'react'
import Script from 'next/script';
import InstagramEmbed from '../components/InstagramEmbed'
import { reels } from '@/Data/PostLinks';

const page = () => {
  return (
    <div>
     <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
      {reels.map((reel, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <InstagramEmbed url={reel.url} caption={reel.caption} />
        </div>
      ))}
      <Script src="//www.instagram.com/embed.js" strategy="afterInteractive" />
    </div>
    </div>
  )
}

export default page
