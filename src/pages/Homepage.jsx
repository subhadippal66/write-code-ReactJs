import React, { useEffect, useState } from 'react'

import {PostCard, PostWidget, Categories, Loader, Footer} from '../component'
import { getCategories, getPosts, getRecentPost } from '../services'


// const posts = [
//   {title:'ahsgags', excerpt:'fhjdfshdbvhvsdvsdbvhsdvbh'},
//   {title:'ahsgagub', excerpt:'fhjdfshdbvhvsdvsdbvhsdvbh'},
// ]

const Homepage = () => {

    const [loading, setLoading] = useState(true)

    const [posts, setPosts] = useState([])
    const [categories, setCategories] = useState([]);

    const [relatedPosts, setRelatedPosts] = useState([]);


    useEffect(()=>{
        getPosts().then(res=>{
            setPosts(res)
            setLoading(false)
        })

        getCategories().then(res=>{
            setCategories(res)
        })

        getRecentPost().then(res=>{
            setRelatedPosts([...res])
        });

        // console.log(posts)
    } , [])


  return (
      <>
      {loading ? <Loader key={90} /> : 
      <>
        <div className="container mx-auto sm:px-10 px-1 mb-4">
        
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
                <div className='lg:col-span-8 col-span-1' >
                {posts.map((post, index)=>(
                    <PostCard post={post.node} key={post.node.slug}/> 
                ))}
                </div>

                <div className='lg:col-span-4 col-span-1'>
                    <div className='lg:sticky relative top-8'>
                        <PostWidget key={765} relatedPosts={relatedPosts} />
                        <Categories key={555} categories={categories} />
                    </div>     
                </div>
            </div>
        
            
        </div>
        <Footer />
        </>
        }
    </>
  )
}

export default Homepage