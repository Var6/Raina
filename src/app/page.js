// "use client"
// import Instacard from "./components/instacard";
// import { useEffect, useState } from "react";

export default function Home() {
  // const [photos, setPhotos] = useState([]);

  // useEffect(() => {
  //   const fetchPhotos = async () => {
  //     const response = await fetch('https://graph.instagram.com/v12.0/Rainaxsinhaa/media?fields=media_url&access_token=YOUR_ACCESS_TOKEN');
  //     const data = await response.json();
  //     setPhotos(data.data);
  //   };

  //   fetchPhotos();
  // }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* {photos.map(photo => (
        <Instacard links={photo.media_url} likes={"goodle"} key={photo.id}/>
      ))} */}
    </div>
  );
}
