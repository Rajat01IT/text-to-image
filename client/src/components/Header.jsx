import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-centermy-20'>
      <div className='text-stone-500 inline-flex text-center gar-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
        <p>best text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </div>

      <h1 className='text-4xl max-w-[550px] sm:text-7xl sn:max-w-[590px] mx-auto mt-10  text-center'>turn text to <samp className='text-blue-600'>image</samp>,in seconds.</h1>
      <p className='text-center max-w-xl mx-auto my-5'>unleash your creativity with AI. turn your imagination into visual art in seconds - just type, and watch the magic happen.</p>
      <button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 flex items-center gap-2 rounded-full'>generate image <img className='h-8' src={assets.star_group} alt="" /> </button>

      <div className='flex flex-wrap justify-center mt-16 gap-3'>
        {Array(6).fill('').map((item, index)=>(
            <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' 
            src={index %2===0 ? assets.sample_img_1:assets.sample_img_2} 
            alt="" key={index} width={70}/>
        ))}
      </div>

      <p className='mt-2 text-neutral-600'>generated images from imagify</p>


    </div>
  )
}

export default Header
