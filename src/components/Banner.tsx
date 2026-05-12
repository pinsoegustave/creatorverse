
import React from 'react'
import myImage from '../assets/banner.jpeg'

export default function Banner() {
  return (
    <div className='relative h-screen bg-black'>
        <div className="w-1/2 " />
        <div className='relative w-full'>
        <img 
            src={myImage}
            alt="banner"
            className='w-full h-1/2 object-cover'
            />
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-8xl font-bold uppercase">creatorverse</span>
        </div> 
            </div>
    </div>
  )
}
