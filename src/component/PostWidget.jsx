import React, {useState, useEffect} from 'react'
import moment from 'moment'
import { getRecentPost,getSimilarPost } from '../services';
import { Link } from 'react-router-dom';

const PostWidget = ({relatedPosts, slug}) => {


  // console.log(relatedPosts)
  return (
    <div className='bg-white rounded-xl p-4 sm:p-8 ringg-2 shadow-lg ring-grayy-400 mb-8'>
      <h3 className='font-semibold mb-8 text-xl border-b pb-4 text-center'>
        {slug? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post)=>(
        <Link key={post.title} to={`/post/${post.slug}`}>
          <div key={post.title} className='flex flex-row items-center justify-start mb-2 py-2 rounded-full hover:bg-slate-100 hover:text-blue-700 ease-linear transition duration-300'>

            <img alt={post.title} height='60px' width='60px' className='align-middle object-cover rounded-full' src={post.featuredimage.url} />

            <div className='flex-col text-left ml-4'>
              <p className='text-gray-500 text-xs'>
                {moment(post.createdAt).format('DD MMMM, YYYY')}
              </p>
              <span className='text-sm' key={post.title} >
                {post.title}
              </span>
            </div>

          </div>
        </Link>
      ))}
    </div>
  )
}

export default PostWidget