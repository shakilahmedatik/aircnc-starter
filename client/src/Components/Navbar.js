import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
import PrimaryButton from '../Components/Button/PrimaryButton'

const Navbar = () => {
  const { user } = useContext(AuthContext)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className='text-gray-900 body-font shadow-sm'>
      <div className=' mx-auto flex flex-wrap py-5 px-20 flex-col md:flex-row items-center'>
        <Link
          to='/'
          className='flex title-font font-medium items-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 mb-4 md:mb-0'
        >
          <span className='ml-3 text-2xl font-bold '>Aircnc</span>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          {user?.email ? (
            <>
              <div className='relative inline-block '>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className='relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40  focus:ring-blue-300  focus:ring  focus:outline-none'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className='absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl '>
                    <Link
                      to='/Dashboard'
                      className='flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 '
                    >
                      <svg
                        className='w-5 h-5 mx-1'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z'
                          fill='currentColor'
                        ></path>
                        <path
                          d='M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z'
                          fill='currentColor'
                        ></path>
                      </svg>

                      <span className='mx-1'>Dashboard</span>
                    </Link>

                    <hr className='border-gray-200' />
                    <div className='flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 '>
                      <svg
                        className='w-5 h-5 mx-1'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z'
                          fill='currentColor'
                        ></path>
                      </svg>

                      <span className='mx-1'>Sign Out</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to='/login' className='mr-5 hover:text-green-600'>
                Login
              </Link>
              <Link to='/signup' className='mr-5'>
                <PrimaryButton classes='rounded-full px-2 py-1'>
                  Signup
                </PrimaryButton>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
