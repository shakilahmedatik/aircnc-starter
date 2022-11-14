import React from 'react'

const WhosComing = ({ setSelectedIndex, host }) => {
  console.log(host)
  return (
    <>
      <h1 className='text-2xl font-bold'>Traveling for work?</h1>
      <div className='flex gap-10 flex-wrap-justify-between'>
        <div>
          <p className='my-3 text-gray-500'>Say hello to your host</p>
          <p className='my-3 text-gray-500'>
            Let {host?.name} know a little about yourself and why you're coming.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img
            alt=''
            className='w-16 h-16 border rounded-full'
            src={host?.image}
          />
          <p>{host?.name}</p>
        </div>
      </div>
      <textarea
        className='border block my-5 p-2'
        placeholder={`Hello ${host?.name}! Cant wait to spend 4 night in your home`}
        name=''
        id=''
        cols='60'
        rows='10'
      ></textarea>
      <button
        className='py-2 px-4 rounded-md hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white'
        onClick={() => setSelectedIndex(2)}
      >
        Continue
      </button>
    </>
  )
}

export default WhosComing
