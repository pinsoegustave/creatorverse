// import React from 'react'
import myImage from "../assets/banner.jpeg";

export default function List() {
  return (
    <div>
      <h2 className="text-white text-center text-2xl">
        View your content creators
      </h2>mb-20
      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 p-8">
      <div className="relative w-125 h-96 rounded-2xl overflow-hidden shadow-xl border border-[#5185B4]">
        {/* Background image */}
        <img
          src={myImage}
          alt="creator"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
          {/* Name + Edit/Delete icons */}
          <div className="flex items-center justify-between">
            <span className="text-white text-xl font-bold">John Doe</span>
            <div className="flex gap-2">
              <button className="text-white hover:text-blue-400 transition">
                ✏️
              </button>
              <button className="text-white hover:text-red-400 transition">
                🗑️
              </button>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex gap-3">
            <a href="#" className="text-white hover:text-blue-400 transition">
              YouTube
            </a>
            <a href="#" className="text-white hover:text-pink-400 transition">
              Instagram
            </a>
            <a href="#" className="text-white hover:text-sky-400 transition">
              Twitter
            </a>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-snug">
            A short description about this creator goes here. Keep it brief.
          </p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="relative w-125 h-96 rounded-2xl overflow-hidden shadow-xl border border-[#5185B4]">
        {/* Background image */}
        <img
          src={myImage}
          alt="creator"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
          {/* Name + Edit/Delete icons */}
          <div className="flex items-center justify-between">
            <span className="text-white text-xl font-bold">John Doe</span>
            <div className="flex gap-2">
              <button className="text-white hover:text-blue-400 transition">
                ✏️
              </button>
              <button className="text-white hover:text-red-400 transition">
                🗑️
              </button>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex gap-3">
            <a href="#" className="text-white hover:text-blue-400 transition">
              YouTube
            </a>
            <a href="#" className="text-white hover:text-pink-400 transition">
              Instagram
            </a>
            <a href="#" className="text-white hover:text-sky-400 transition">
              Twitter
            </a>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-snug">
            A short description about this creator goes here. Keep it brief.
          </p>
        </div>
      </div>
      {/* Card 3 */}
      <div className="relative w-125 h-96 rounded-2xl overflow-hidden shadow-xl border border-[#5185B4]">
        {/* Background image */}
        <img
          src={myImage}
          alt="creator"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
          {/* Name + Edit/Delete icons */}
          <div className="flex items-center justify-between">
            <span className="text-white text-xl font-bold">John Doe</span>
            <div className="flex gap-2">
              <button className="text-white hover:text-blue-400 transition">
                ✏️
              </button>
              <button className="text-white hover:text-red-400 transition">
                🗑️
              </button>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex gap-3">
            <a href="#" className="text-white hover:text-blue-400 transition">
              YouTube
            </a>
            <a href="#" className="text-white hover:text-pink-400 transition">
              Instagram
            </a>
            <a href="#" className="text-white hover:text-sky-400 transition">
              Twitter
            </a>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-snug">
            A short description about this creator goes here. Keep it brief.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
