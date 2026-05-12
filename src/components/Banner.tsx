
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
        <div style={{ fontFamily: 'Sono, monospace'}} className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white text-9xl font-bold uppercase mb-12">creatorverse</span>
            {/* Buttons */}
            <div className='flex gap-8'>
                <button className='uppercase bg-[#5185B4] p-4 m-4 font-extrabold text-white rounded-lg'>view all creators</button>
                <button className='uppercase bg-[#5185B4] p-4 m-4 font-extrabold text-white rounded-lg'>add a creator</button>
            </div>
        </div> 
            </div>
    </div>
  )
}
