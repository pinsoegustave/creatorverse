// pages/ViewCreator.tsx
import { SiInstagram, SiX, SiYoutube } from '@icons-pack/react-simple-icons'
import myImage from '../assets/banner.jpeg'
import { Pencil, Trash2 } from 'lucide-react'

export default function ViewCreator() {
  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center">
      <div className="flex flex-col w-200 rounded-b-2xl overflow-hidden shadow-xl">
        <div className='flex h-100 '>
            {/* Left - Image */}
          <img
            src={myImage}
            alt="creator"
            className="w-1/2 h-full object-cover border-2 border-[#5185B4]"
          />

          {/* Right - Info */}
          <div className="w-1/2 bg-[#111] flex flex-col justify-center gap-4 p-8">
            
            {/* Name + Edit/Delete */}
            <div className="flex items-center justify-between">
              <h1 className="text-white text-3xl font-bold">John Doe</h1>
              <div className="flex gap-2">
                <button className="text-white hover:text-blue-400 transition">
                  <Pencil size={18} />
                </button>
                <button className="text-white hover:text-red-400 transition">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              A short description about this creator goes here. They make amazing
              content across multiple platforms and have built a huge community.
            </p>

            {/* Social media icons */}
            <div className="flex flex-col gap-4">
              <a href="#" className="flex gap-2 text-white hover:text-red-500 transition">
                <SiYoutube size={22} /> @mrbeast_12
              </a>
              <a href="#" className="flex gap-2 text-white hover:text-pink-400 transition">
                <SiInstagram size={22} />@mrbeast
              </a>
              <a href="#" className="flex gap-2 text-white hover:text-sky-400 transition">
                <SiX size={22} />@mrbeast148943
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex m-10 gap-20 items-center">
            <button className="w-1/2 bg-[#5185B4] py-4 text-white font-bold uppercase hover:border-2 hover:border-white hover:opacity-90 transition">
                Edit
            </button>
            <button className="w-1/2 bg-red-600 py-4 text-white font-bold uppercase hover:border-2 hover:border-white hover:opacity-90 transition">
                Delete
            </button>
        </div>
        </div>
    </div>
  )
}