import React from 'react'
import {
  ChevronDownIcon,
  FaceSmileIcon,
  FireIcon,
  NoSymbolIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'

const ReviewHouse = ({ setSelectedIndex }) => {
  return (
    <>
      <h1 className='text-gray-900 title-font text-4xl font-medium'>
        Review house rules
      </h1>
      <br />
      <h3 className='text-gray-900 title-font text-xl font-medium'>
        3 nights in Dhaka
      </h3>
      <div className='flex flex-wrap gap-10 mt-4'>
        <div className='flex justify-between gap-2'>
          <div className='text-sm px-3 py-1 bg-gray-200 text-center'>
            <p>APR</p>
            <p>13</p>
          </div>
          <div>
            <p>Monday check-in</p>
            <p>After 12:00 PM</p>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex justify-between gap-2'>
            <div className='text-sm px-3 py-1 bg-gray-200 text-center'>
              <p>APR</p>
              <p>13</p>
            </div>
            <div>
              <p>Monday check-in</p>
              <p>After 12:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      <p className='my-8 text-gray-500'>Self check-in with building staff</p>
      <hr />
      <p className='text-xl font-bold my-4'>Things to keep in mind</p>
      <div>
        <div class='flex flex-col items-center my-2 mt-8 mx-auto max-w-7xl sm:flex-row'>
          <div class='inline-flex p-2 border items-center justify-center flex-shrink-0 mt-1 text-neutral-600 bg-gray-50 sm:mr-3'>
            <UserGroupIcon className=' w-5 h-5' />
          </div>
          <div class='flex-grow prose sm:text-left prose-md'>
            <p className='text-gray-800 text-medium'>
              Suitable for children and infants
            </p>
          </div>
        </div>
        <div class='flex flex-col items-center  my-2 mx-auto max-w-7xl sm:flex-row'>
          <div class='inline-flex p-2 border items-center justify-center flex-shrink-0 mt-1 text-neutral-600 bg-gray-50 sm:mr-3'>
            <FaceSmileIcon className=' w-5 h-5' />
          </div>
          <div class='flex-grow prose sm:text-left prose-md'>
            <p className='text-gray-800 text-medium'>Pets allowed</p>
          </div>
        </div>
        <div class='flex flex-col items-center  my-2 mx-auto max-w-7xl sm:flex-row'>
          <div class='inline-flex p-2 border items-center justify-center flex-shrink-0 mt-1 text-neutral-600 bg-gray-50 sm:mr-3'>
            <NoSymbolIcon className=' w-5 h-5' />
          </div>
          <div class='flex-grow prose sm:text-left prose-md'>
            <p className='text-gray-800 text-medium'>No parties or events</p>
          </div>
        </div>
        <div class='flex flex-col items-center  my-2 mx-auto max-w-7xl sm:flex-row'>
          <div class='inline-flex p-2 border items-center justify-center flex-shrink-0 mt-1 text-neutral-600 bg-gray-50 sm:mr-3'>
            <FireIcon className=' w-5 h-5' />
          </div>
          <div class='flex-grow prose sm:text-left prose-md'>
            <p className='text-gray-800 text-medium'>Smoking allowed</p>
          </div>
        </div>
      </div>

      <div className='flex gap-3 items-center text-medium text-blue-600'>
        <p>Read more</p>
        <ChevronDownIcon className='h-5 w-5' />
      </div>
      <br />

      <button
        className='p-2 rounded-md hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white'
        onClick={() => setSelectedIndex(1)}
      >
        Agree and continue
      </button>
    </>
  )
}

export default ReviewHouse
