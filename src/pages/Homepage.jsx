import React, { useEffect, useState } from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import {PostCard, PostWidget, Categories, Loader, Footer, FeaturedPost} from '../component'
import { getCategories, getPosts, getRecentPost, getFeaturedPosts } from '../services'


// const posts = [
//   {title:'ahsgags', excerpt:'fhjdfshdbvhvsdvsdbvhsdvbh'},
//   {title:'ahsgagub', excerpt:'fhjdfshdbvhvsdvsdbvhsdvbh'},
// ]

const Homepage = () => {

    const [loading, setLoading] = useState(true)

    const [posts, setPosts] = useState([])
    const [categories, setCategories] = useState([]);

    const [relatedPosts, setRelatedPosts] = useState([]);
    
    const [featuredPost, setFeaturedPost] = useState([]);


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

        getFeaturedPosts().then(res=>{
            setFeaturedPost([...res])
        })

        // console.log(posts)
    } , [])


    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 3,
        },
        desktop: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 768, min: 640 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 1,
        },
      };

    const customLeftArrow = (
        <div className="absolute arrow-btn left-0 text-center p-3 cursor-pointer bg-blue-700 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>
      );
    
      const customRightArrow = (
        <div className="absolute arrow-btn right-0 text-center p-3 cursor-pointer bg-blue-700 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      );

  return (
      <>
      {loading ? <Loader key={90} /> : 
      <>
        <div className="container mx-auto sm:px-10 px-1 mb-4">
        
            <div className='mb-8'>
                <Carousel
                    autoPlaySpeed={9999999999999}
                    infinite
                    customLeftArrow={customLeftArrow} 
                    customRightArrow={customRightArrow} 
                    responsive={responsive} 
                    itemClass="px-4"
                >
                        {featuredPost.map((ele, index)=>(
                            <FeaturedPost post={ele} key={index} />
                        ))}
                </Carousel>
                
                
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
                <div className='lg:col-span-8 col-span-1' >
                {posts.map((post, index)=>(
                    <PostCard post={post.node} key={post.node.slug+'slug'}/> 
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