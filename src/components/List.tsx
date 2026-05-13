// import React from 'react'
import { useEffect, useState } from "react";
import myImage from "../assets/banner.jpeg";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";

interface Creator {
    id: string
    name: string
    url: string
    description: string
    imageURL: string
}

export default function List() {

    const [creators, setCreators] = useState<Creator[]>([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCreators = async () => {
            const {data, error} = await supabase
                .from('creators')
                .select('*')

            if (error) {
                console.error("Error fetching creators:", error.message)
            } else {
                setCreators(data);
            }
            setLoading(false)
        }
        fetchCreators();
    }, [])

    if (loading) return <p className="text-white text-center mt-10">Loading creators....</p>

  return (
    <div>
      <h2 className="text-white text-center text-2xl">
        View your content creators
      </h2>
      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 p-8">
        {creators.map(creator => (
            <div 
                key={creator.id}
                onClick={() => navigate(`/viewcreator/${creator.id}`)}
                className="relative w-125 h-96 rounded-2xl overflow-hidden shadow-xl border border-[#5185B4]">
        <img
          src={creator.imageURL}
          alt={creator.name}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
          {/* Name + Edit/Delete icons */}
          <div className="flex items-center justify-between">
            <span className="text-white text-xl font-bold">{creator.name}</span>
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
            {creator.description}
          </p>
        </div>
      </div>
      ))}
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
