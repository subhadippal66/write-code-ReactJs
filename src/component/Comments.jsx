import React, {useEffect, useState} from 'react'
import moment from 'moment'
import parse from 'html-react-parser'

const Comments = ({comments}) => {
  return <>
      {comments.length>0 && (
        <div className='bg-white rounded-xl p-4 sm:p-8 ringg-2 shadow-lg ring-grayy-400 mb-8'>
          <h3 className='text-xl mb-8 font-semibold border-b border-gray-300 pb-4'>
            {comments.length}
            {' '}
            Comments
          </h3>
          {
            comments.map((comment)=>(
              <div key={comment.createdAt} className='border-b flex flex-col justify-start items-start border-gray-200 mb-4 pb-2'>
                <p className='mb-2'>
                  <span className='font-semibold'>{comment.name}</span>
                  {' '}
                  on
                  {' '}
                  {moment(comment.createdAt).format('DD MMMM, YYYY')}
                </p>
                <p className='whitespace-pre-line text-gray-600 '>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    {' '}
                    {parse(comment.comment)}
                </p>
              </div>
            ))
          }
        </div>
      )}
  </>
}

export default Comments