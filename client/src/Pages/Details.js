import {
  StarIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  HomeIcon,
  CheckBadgeIcon,
  BeakerIcon,
  UserIcon,
} from '@heroicons/react/24/solid'
import React from 'react'
import PrimaryButton from '../Components/Button/PrimaryButton'

const Details = () => {
  let totalNights = 0
  let sub_total = 0
  let total = 0

  return (
    <div>
      {/* Header */}
      <div className='flex flex-wrap h-[400px]'>
        <div className='w-1/2 h-full overflow-hidden'>
          <img
            alt='feature'
            className='object-cover object-start h-full w-full'
            src='https://i.ibb.co/YPXktqs/Home1.jpg'
          />
        </div>
        <div className='w-1/2 h-full overflow-hidden'>
          <img
            alt='feature'
            className='object-cover object-start h-full w-full'
            src='https://i.ibb.co/DCzG2cp/christine-roy-ir5-MHI6r-Pg0-unsplash-1.jpg'
          />
        </div>
      </div>

      {/* Main Content */}
      <div className='md:flex justify-between sm:mx-10 md:mx-20 px-4 lg:mx-40 py-12'>
        {/* Details */}
        <div className='flex-1 max-w-lg'>
          <div className='flex justify-between'>
            <div>
              <h2 className='text-gray-900 title-font text-lg font-medium'>
                Huge Apartment with 4 bedrooms
              </h2>
              <br />
              <h3 className='text-gray-400 text-xs tracking-widest title-font mb-1 mt-1'>
                Dhaka, Bangladesh
              </h3>
              <h3 className='text-gray-400 text-xs tracking-widest title-font mb-1 mt-1'>
                04 Guests 02 Bedrooms 1 bath
              </h3>
            </div>
            <div>
              <div className='flex flex-col items-center justify-center'>
                <img
                  alt=''
                  referrerPolicy='no-referrer'
                  className='w-16 h-16 border rounded-full'
                  src='https://i.ibb.co/6JM5VJF/photo-1633332755192-727a05c4013d.jpg'
                />
                <p>John Doe</p>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className='flex flex-col items-start pb-4 my-2 mt-8 mx-auto max-w-7xl sm:flex-row'>
              <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3'>
                <HomeIcon />
              </div>
              <div className='flex-grow prose sm:text-left prose-md'>
                <p className='text-gray-500 text-xl'>Entire Home</p>
                <p className='text-gray-400'>
                  You will have the condominium to yourself.
                </p>
              </div>
            </div>
            <div className='flex flex-col items-start pb-4 mx-auto my-2 max-w-7xl sm:flex-row'>
              <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3'>
                <CheckBadgeIcon />
              </div>
              <div className='flex-grow prose sm:text-left prose-md'>
                <p className='text-gray-500 text-xl'>Self check-in</p>
                <p className='text-gray-400'>
                  You can check in with the doorman.
                </p>
              </div>
            </div>
            <div className='flex flex-col items-start pb-4 mx-auto my-2 max-w-7xl sm:flex-row'>
              <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3'>
                <BeakerIcon />
              </div>
              <div className='flex-grow prose sm:text-left prose-md'>
                <p className='text-gray-500 text-xl'>Sparkling clean</p>
                <p className='text-gray-400'>
                  10 recent guests said this place was sparkling clean.
                </p>
              </div>
            </div>
            <div className='flex flex-col items-start pb-4 mx-auto my-2 max-w-7xl sm:flex-row'>
              <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3'>
                <UserIcon />
              </div>
              <div className='flex-grow prose sm:text-left prose-md'>
                <p className='text-gray-500 text-xl'>Atik is a Super host</p>
                <p className='text-gray-400'>
                  Super hosts are experienced, highly rated hosts who are
                  committed to providing great stays for guests.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className='mt-4 text-gray-500'>
            <p>
              It's newly constructed 7 storied building maintaining building
              code by a locally famous architect. Enough lights and natural air
              are playing here. The place (apartment) is calm and noise free.
              You'll love my place for its lovely and bright looks comfortable
              stay.
            </p>
            <p>
              Bangladesh is a beauty with its six seasons and green. The people
              are hospitable and worm.It's newly constructed 7 storied building
              maintaining building code by a locally famous architect. Enough
              lights and natural air are playing here. The place (apartment) is
              calm and noise free. You'll love my place for its lovely and
              bright looks comfortable Stay.
            </p>
            <p>
              Bangladesh is a beauty with its six seasons and green. The people
              are hospitable and worm.
            </p>
          </div>
          <br />
          <div className='flex gap-3 items-center text-xl text-blue-600'>
            <p>Read more about the space</p>
            <ChevronDownIcon className='h-5 w-5' />
          </div>
          <br />
          <div>
            <p className='text-xl text-gray-900'>Reviews</p>
            <div className='flex gap-1 mb-2'>
              <StarIcon className='h4 w-4 text-green-500' />{' '}
              <span>4.8 (10 reviews)</span>
            </div>
          </div>
        </div>

        {/* Cart */}
        <div className='p-4 md:w-1/2 lg:w-1/3 w-full h-full rounded shadow-lg'>
          <h1 className='text-gray-900 text-3xl title-font font-medium mb-2'>
            $35/ <span className='font-thin'>night</span>
          </h1>
          <div className='flex gap-1 mb-2'>
            <StarIcon className='h4 w-4 text-green-500' />{' '}
            <span>4.8 (10 reviews)</span>
          </div>

          <p>Dates</p>
          <div className='flex justify-between items-center p-2 border mt-1 mb-2'>
            <div>13/11/2022</div>
            <div>
              <ArrowRightIcon className='h5 w-5' />
            </div>
            <div>15/11/2022</div>
          </div>

          <div className='flex border-t border-gray-200 py-2'>
            <span className='text-gray-500'>$34 x {totalNights} nights</span>
            <span className='ml-auto text-gray-900'>${sub_total}</span>
          </div>
          <div className='flex border-t border-gray-200 py-2'>
            <span className='text-gray-500'>Cleaning Fee</span>
            <span className='ml-auto text-gray-900'>$10</span>
          </div>
          <div className='flex border-t border-gray-200 py-2'>
            <span className='text-gray-500'>Service Fee</span>
            <span className='ml-auto text-gray-900'>$21</span>
          </div>
          <div className='flex border-t border-b mb-6 border-gray-200 py-2'>
            <span className='text-gray-900 font-bold'>Total</span>
            <span className='ml-auto text-gray-900'>${total}</span>
          </div>
          <div className='mt-6 mb-2'>
            <PrimaryButton
              type='submit'
              classes='w-full px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-md'
            >
              Reserve
            </PrimaryButton>
          </div>
          <p className='text-center text-gray-400 mb-6'>
            You won't be charged yet!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details
