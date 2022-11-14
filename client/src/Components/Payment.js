import React from 'react'

const Payment = () => {
  return (
    <>
      <h1 className='text-2xl font-bold'>Payment Selection</h1>

      <textarea
        className='border block my-5 p-2'
        placeholder='Insert your payment credentials here!'
        name=''
        id=''
        cols='60'
        rows='10'
      ></textarea>

      <button
        className='py-2 px-4 rounded-md hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white'
        onClick={() => alert('Payment Done!')}
      >
        Pay
      </button>
    </>
  )
}

export default Payment
