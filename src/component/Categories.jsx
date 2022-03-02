import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


const Categories = ({categories}) => {
  return (
    <div className='bg-white rounded-xl p-4 sm:p-8 ring-2 ring-gray-200 mb-8'>
      <h3 className='font-semibold mb-4 text-xl border-b pb-4'>
        categories
      </h3>
      {categories.map((category)=>(
        <Link key={category.slug}  to={`/category/${category.slug}`}>
          <div className='cursor-pointer py-2 mb-1 rounded-full hover:bg-slate-100 hover:text-blue-700 transition duration-300'>
            {category.name}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Categories