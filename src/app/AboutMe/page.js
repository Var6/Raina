'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Review from '../components/review'
import { FlipWords } from '../components/flipwords'
import { Modal, ModalTrigger } from '../components/animatedbutton'



function page() {
    const words=['Raina', 'A Dancer','A Influencer','A Student' ]
  return (
            <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap sm:text-center sm:items-center sm:justify-center">
            <Image alt="My Image" width={1000} height={1000} className="lg:w-1/2 lg:h-fit sm:w-full sm:items-center w-fit h-64 object-cover object-center rounded sm:mx-auto md:items-center" src="/Photos/1.jpg" priority/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 sm:w-fit lg:mt-0">
                <h1 className="text-white mb-4 text-5xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold title-font flex ml-3 pl-3 py-2 ">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Hello,I&apos;m
                <br />
                <FlipWords words={words} />
                </span>
                </h1>
                <p className="leading-relaxed"> influencer, dancer, and zoology student from Varanasi, India. With a passion for creating engaging content and promoting brands, I&apos;ve built a community on Instagram and beyond. When I&apos;m not studying or creating, you can find me dancing, exploring new places, or trying out new tech trends.
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                <Review rate={4} feild={'Dance'}/>
                <Review rate={3} feild={'Photography'}/>
                <Review rate={4} feild={'Fitness'}/>
                <Review rate={2} feild={'Modeling'}/>
                <Link href={'./Contact'}>
                <div className="flex items-center justify-center">
                <Modal>
                <ModalTrigger className="bg-blue-700 dark:bg-blue-300 dark:text-black text-white flex justify-center group/modal-btn">
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                 Contact
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                    🔗
                </div>
                </ModalTrigger>
                </Modal>
                </div>
                </Link>
            </div>
            </div>
        </div>
        </section>
  )
}

export default page