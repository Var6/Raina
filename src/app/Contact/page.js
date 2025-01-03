'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import { GoogleGeminiEffect } from '../components/googleEffect'
import { useScroll, useTransform } from 'framer-motion';
import Textfixer from '../components/textfixer';

function Page() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const messages =[
      'Feel free to connect',
      'Connect me on Instagam',
      'Feel free to connect',
      'Connect me on Snapchat',
      'Feel free to connect',
      'Connect me on Facebook',
      'Feel free to connect',
      'Connect me via Email',
   
    ];
  return (
    <div className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}>
      <GoogleGeminiEffect  pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]} title='Contact Me'
        description={' Feel free to reach out to me with any questions or inquiries.'}
        className={" min-h-screen  flex flex-col translate-y-10 items-center justify-center"}
        />   
       {
        messages.map((message,index)=>(
          <Textfixer key={index} text={message} place={index % 2 !== 0 ? 'text-right -px-4 ' : 'text-left'}/>
        ))}
        <Textfixer text={'hellow'} place={'float-right p-3'} />
        </div>  
  )
}

export default Page