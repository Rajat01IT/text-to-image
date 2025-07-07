import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28 '>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>creat ai images</h1>
      <p className='text-gray-500 mb-8 '>turn your imagination into visuals</p>

      <div className='flex flex-col gat-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg ' />
        <div>
            <h2 className='text-3xl font-medium max-w-lg mb-4'>introduction the ai-ppwered text to image generator </h2>
            <p className='text-gray-600 md-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias consequatur ipsum aut voluptas tenetur laboriosam mollitia, maiores rem nisi aperiam sint laudantium distinctio officia ipsa deleniti error facere totam?</p>
            <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae praesentium, rerum repellat animi recusandae ipsa, sunt quo ullam reiciendis esse non alias, ducimus voluptatibus enim impedit inventore odio quod tempora!</p>
        </div>
      </div>
    </div>
  )
}

export default Description
