import React from 'react'

const Donor = () => {
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10'>
      <h1 className='text-3xl font-medium'>Organ Donor Portal</h1>
      <p className='sm:w-1/3 text-center text-sm'>Help save lives by becoming an organ donor.</p>
      
      <div 
        className='bg-gradient-to-r from-blue-500 to-purple-600 text-white p-16 rounded-xl cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg max-w-6xl w-full min-h-[300px] flex items-center'
        onClick={() => window.open('http://localhost:3000', '_blank')}
      >
        <div className='text-center w-full'>
          <h2 className='text-5xl font-light mb-8'>Donate Organs, Save Lives</h2>
          <p className='mb-8 text-xl font-light'>Join our organ donor community and make a difference</p>
          <button className='bg-white text-blue-600 px-10 py-4 rounded-full font-light hover:bg-gray-100 transition-colors duration-200 text-xl'>
            Access Donor Portal
          </button>
        </div>
      </div>
    </div>
  )
}

export default Donor