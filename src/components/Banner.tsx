
import { useNavigate } from 'react-router-dom'
import myImage from '../assets/banner.jpeg'
import List from './List';

export default function Banner() {

  const navigate = useNavigate();

  return (
    <div className=''>
        <div className="w-1/2" />
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
                <button 
                  onClick={() => navigate('/')}
                  className='uppercase bg-[#5185B4] p-4 m-4 font-extrabold text-white rounded-lg'>view all creators</button>
                <button
                 onClick={() => navigate('/add')}
                 className='uppercase bg-[#5185B4] p-4 m-4 font-extrabold text-white rounded-lg'>add a creator</button>
            </div>
        </div> 
            </div>
            <List />
    </div>
  )
}
