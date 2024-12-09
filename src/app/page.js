// "use client"
// import Instacard from "./components/instacard";
// import { useEffect, useState } from "react";
import Image from "next/image"
import React from "react";

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
                <div>
                    <Image width={200} height={100} className="h-auto max-w-full rounded-lg" src="/Photos/2.jpeg" alt=""/>
                </div>
                 <div>
                    <Image width={100} height={100} className="h-auto max-w-full rounded-lg" src="/Photos/1.jpg" alt=""/>
                </div>
                <div>
                    <Image width={100} height={100} className="h-auto max-w-full rounded-lg" src="/Photos/2.jpeg" alt=""/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image width={100} height={100} className="h-auto max-w-full rounded-lg" src="/Photos/1.jpg" alt=""/>
                </div>
                <div>
                    <Image width={100} height={100} className="h-auto max-w-full rounded-lg" src="/Photos/2.jpeg" alt=""/>
                </div>
                <div>
                    <Image width={100} height={100} className="h-auto max-w-full rounded-lg" src="/Photos/1.jpg" alt=""/>
                </div>
            </div>
        </div>

  );
}
