import React, { useEffect, useState } from 'react'
import HomeCard from '../Components/Card/HomeCard'
import Spinner from '../Components/Spinner/Spinner'

const AllHome = () => {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className='text-gray-600 body-font'>
          <div className='container pb-8 pt-2 mx-auto'>
            <div className='flex flex-wrap'>{/* Card goes here */}</div>
          </div>
        </section>
      )}
    </>
  )
}

export default AllHome
