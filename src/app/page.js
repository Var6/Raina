
import Image from "next/image"
import React from "react";
import { ParallaxScroll } from "./components/ParrelxScroll";
// import { StarsBackground } from "./components/backgroundstar";
// import { ShootingStars } from "./components/Star";

export default function Home() {
    const images=[
        '/Photos/1.jpg',
        '/Photos/2.jpeg',
        '/Photos/DP.png',
        '/Photos/1.jpg',
        '/Photos/2.jpeg',
        '/Photos/DP.png',
        '/Photos/1.jpg',
        '/Photos/2.jpeg',
        '/Photos/DP.png',
        '/Photos/1.jpg',
        '/Photos/2.jpeg',
        '/Photos/DP.png',
        '/Photos/1.jpg',
        '/Photos/2.jpeg',
        '/Photos/DP.png',
        '/Photos/1.jpg',
        '/Photos/2.jpeg',
        '/Photos/DP.png',
        '/Photos/1.jpg',
        '/Photos/2.jpeg',
        '/Photos/DP.png',
    ];

    return (
        <div className="min-h-full">

            <ParallaxScroll images={images}/>
        </div>

  );
}
