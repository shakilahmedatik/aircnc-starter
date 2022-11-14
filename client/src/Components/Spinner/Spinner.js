import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <p className='text-7xl font-thin'>L</p>
      <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
      <p className='text-7xl font-thin'>ading....</p>
    </div>
  )
}

export default Spinner
