import React from 'react'
import { Link } from 'react-router-dom'
import { StarIcon } from '@heroicons/react/24/solid'
const ExpCard = () => {
  return (
    <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
      <Link
        to='/coming-soon'
        className='block relative h-32 rounded overflow-hidden'
      >
        <img
          alt='e-commerce'
          className='object-cover object-center w-full h-full block'
          src='https://i.ibb.co/hfzf6CJ/Experience2.jpg'
        />
      </Link>
      <div className='mt-4'>
        <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
          Dhaka
        </h3>
        <h2 className='text-gray-900 title-font text-lg font-medium'>
          Hiking In the Mountains
        </h2>
        <p className='mt-1'>$50 per person</p>
        <div className='flex mt-1'>
          <StarIcon className='h3 w-3 text-green-500' />
          <StarIcon className='h3 w-3 text-green-500' />
          <StarIcon className='h3 w-3 text-green-500' />
          <StarIcon className='h3 w-3 text-green-500' />
          <StarIcon className='h3 w-3 text-green-500' /> <span>33</span>
        </div>
      </div>
    </div>
  )
}

export default ExpCard
