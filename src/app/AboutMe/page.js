'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Review from '../components/review'



function page() {
  return (
            <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap sm:text-center sm:items-center sm:justify-center">
            <Image alt="My Image" width={1000} height={1000} className="lg:w-1/2 lg:h-fit sm:w-full sm:items-center w-fit h-64 object-cover object-center rounded sm:mx-auto md:items-center" src="/Photos/1.jpg" priority/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 sm:w-fit lg:mt-0">
                <h1 className="text-white mb-4 text-5xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold title-font flex ml-3 pl-3 py-2 ">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Hello,I`m
                <br />
                Raina
                </span>
                </h1>
                <p className="leading-relaxed">Am persuing my graduation from U.P collge Varanasi,
                I have experence in teaching English for ILETS students and am an influcencer on Intagram,
                I like to explore new cities and make friends, great beliver in Honesty is the best policy and always like to be on time
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                <Review rate={4} feild={'Dance'}/>
                <Review rate={3} feild={'Photography'}/>
                <Review rate={4} feild={'Fitness'}/>
                <Review rate={2} feild={'Modeling'}/>
                <div className="flex">
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Contact</button>
                </div>
            </div>
            </div>
        </div>
        </section>
  )
}

export default page