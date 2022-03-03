import React from 'react'

const Footer = () => {
  return (
    <div className='p-4 font-medium text-gray-800 text-center'>
        Built with {' '}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-red-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
        {' '} in India
    </div>
  )
}

export default Footer