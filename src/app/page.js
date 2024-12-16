
import Image from "next/image"
import React from "react";
// import { StarsBackground } from "./components/backgroundstar";
// import { ShootingStars } from "./components/Star";

export default function Home() {

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            <div className="grid gap-4 z-50 ">
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
            <div className="grid gap-4 z-50">
                <div>
                    <Image width={100} height={100} className="h-auto max-w-full rounded-lg" src="/Photos/1.jpg" alt="asdf"/>
                </div>
                <div>
                    <Image width={100} height={100} className="h-auto max-w-full rounded-lg" src="/Photos/2.jpeg" alt="adsf"/>
                </div>
                <div>
                    <Image width={100} height={100} className="h-auto max-w-full rounded-lg" src="/Photos/1.jpg" alt="adf"/>
                </div>
            </div>
            {/* <ShootingStars minDelay={1000} maxDelay={2600} starWidth={13} maxSpeed={20} minSpeed={10}/>
        <StarsBackground starDensity={0.0015} maxTwinkleSpeed={3}/> */}
        </div>

  );
}
