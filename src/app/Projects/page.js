import React from 'react'
import Script from 'next/script';
import InstagramEmbed from '../components/InstagramEmbed'

const page = () => {
  const reels = [
    {
      url: 'https://www.instagram.com/reel/DDPr7YgsMZN/',
      caption: 'Collaboration with Wild_Oke for EXFOLITING SRUM advertisement',
    },
    {
      url: 'https://www.instagram.com/reel/DBTeJbwt_Nb/',
      caption: 'Collaboration with Lotus for WHITEGLOW FACEWASH advertisement',
    },
    {
      url: 'https://www.instagram.com/reel/DA9BGj5KNff/',
      caption: 'Collaboration with Lotus for Vit.C SKIN BRIGHTING FACIAL KIT advertisement',
    },
    {
      url: 'https://www.instagram.com/reel/DAn95Y_KKEu/',
      caption: 'Collaboration with Lotus for BOTANICALS NATURAL GREEN TEA HYDRA DETOX SOOTHING NIGHT GEL  advertisement',
    },
    {
      url: 'https://www.instagram.com/reel/C95Q83nSmJM/',
      caption: 'Collaboration with Lotus for MATTE GEL SUNSCREEN SPF 50 advertisement',
    },
    {
      url: 'https://www.instagram.com/reel/C7n_Odjp0dz/',
      caption: 'Collaboration with PEESAFE for TOILET SEAT SANITIZER SPRAY & DAILY WEAR PANTY LINERS advertisement',
    },
  ];

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
