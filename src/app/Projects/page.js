'use client'
import Image from 'next/image';
// import { useState, useEffect } from 'react';
// const instagramApiEndpoint = `https://graph.instagram.com/${process.env.userId}/media?fields=media_url,thumbnail_url,caption&access_token=${process.env.MyAcessToken}`;
const page = () => {
  // const [instagramMedia, setInstagramMedia] = useState([]);
  // useEffect(() => {
  //   const apiUrl = `https://graph.instagram.com/${process.env.userId}/media?fields=media_url,thumbnail_url,caption&access_token=${process.env.accessToken}`;
  //   fetch(apiUrl)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}. ${response.statusText}`);
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       if (data.error) {
  //         throw new Error(`Instagram API error: ${data.error.message}`);
  //       }
  //       setInstagramMedia(data.data);
  //     })
  //     .catch(error => console.error("Error fetching Instagram media:", error));
  // }, []);
  // console.log(instagramMedia);
  
  
  return (
    <div>
       {/* <h2>Instagram Media</h2>
    <div className="flex flex-wrap justify-center">
      {instagramMedia.map((item, index) => (
        <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <Image src={item.media_url} alt={item.caption} className="w-full h-full object-cover" />
        </div>
      ))}
    </div> */}
    </div>
  )
}

export default page