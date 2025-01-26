"use client";

import { useTheme } from 'next-themes';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const TechCarousel = () => {
    const { theme } = useTheme();
    const [nextImg, setNextImg] = useState<string>();

    useEffect(()=>
    {
        if(theme)
        {
            setNextImg(theme);
        }
    }, [theme])
  return (
    <>
    <div className="flex flex-wrap items-center justify-center gap-8 mt-6" suppressHydrationWarning>
          <Image src={`/assets/html5.webp`} width={80} height={80} alt="HTML5" unoptimized/>
          <Image src={`/assets/js.png`} width={80} height={80} alt="HTML5" unoptimized/>
          <Image src={`/assets/bootstraplogo.png`} width={80} height={80} alt="HTML5" unoptimized/>
          <Image src={`/assets/tailwind.png`} width={80} height={80} alt="HTML5" unoptimized/>
          <Image src={`/assets/React.webp`} width={80} height={80} alt="HTML5" unoptimized/>
          {
            nextImg === 'dark'?<Image src={`/assets/nextwhite.png`} width={140} height={80} alt="HTML5" unoptimized/>:<Image src={`/assets/nextjs.png`} width={140} height={80} alt="HTML5" unoptimized/>
          }
          
          <Image src={`/assets/Vue.png`} width={80} height={80} alt="HTML5" unoptimized/>
          <Image src={`/assets/angular.png`} width={80} height={80} alt="HTML5" unoptimized/>
          <Image src={`/assets/python.webp`} width={80} height={80} alt="HTML5" unoptimized/>
        </div>
    </>
  )
}

export default TechCarousel