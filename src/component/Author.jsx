import React from 'react'

const Author = ({author}) => {
  return (
    <div className='text-center mb-8 mt-20 relative rounded-xl bg-white p-4 ring-2 ring-gray-200 '>
        <div className='absolute left-0 right-0 -top-14'>
            <img
              alt={author.name}
              height='100px'
              width='100px'
              className='align-middle rounded-full ml-auto mr-auto'
              src={author.photo.url}
            />
        </div>
        <h3 className='text-gray-700 my-2 mt-8 text-xl font-bold'>{author.name}</h3>
        <p className='text-gray-500 text-lg '> {author.bio} </p>
    </div>
  )
}

export default Author