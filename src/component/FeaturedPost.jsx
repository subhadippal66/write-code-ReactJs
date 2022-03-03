import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const FeaturedPost = ({post}) => {
    // console.log(post)
  return (
    <div className="relative h-72">
        <div className="absolute  rounded-xl shadow-lg bg-center bg-no-repeat bg-cover inline-block w-full h-72" style={{ backgroundImage: `url('${post.featuredimage.url}')` }} />
        <div className="absolute  rounded-xl  bg-center bg-gradient-to-b opacity-50 from-gray-600 via-gray-800 to-black w-full h-72" />
        <div className="flex flex-col rounded-xl  p-4 items-center justify-center absolute w-full h-full">
            <p className="text-white mb-4 text-shadow font-semibold text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-2 mb-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{post.title}</p>
            <div className="flex items-center absolute bottom-5 w-full justify-center">
                <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle drop-shadow-lg rounded-full"
                src={post.author.photo.url}
                />
                <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.author.name}</p>
            </div>
        </div>
        <Link to={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
    </div>
  )
}

export default FeaturedPost