import React, { useEffect, useState } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import { Author, Categories, Comments, CommentsForm, PostDetail, PostWidget, Loader } from '../component';
import { getCategories, getComments, getPostDetails, getSimilarPost } from '../services';

const PostDetails = () => {

  const [loading, setLoading] = useState(true)


  let params = useParams();
  const [post_title, setPost_title] = useState(params.post);  

  const history = useNavigate()

  useEffect(()=>{
    setPost_title(params.post)
  },[history])

  const [postDetails, setPostDetails] = useState(null)

  const [categories, setCategories] = useState([]);

  const [comments, setComments] = useState([])

  const [relatedPosts, setRelatedPosts] = useState([]);


  useEffect(()=>{
    getPostDetails(post_title).then(res=>{
      // console.log(res);
      if(res==null){
        return
      }
      setPostDetails(res);

      setLoading(false)

      getComments(res.slug).then((result) => {
        setComments(result);
      });

      let categories_= res.categories.map((category) => category.slug);
      getSimilarPost(categories_, res.slug).then((res)=>{
        setRelatedPosts([...res])
      });

    })

    getCategories().then(res=>{
      setCategories(res)
    })

  }, [post_title])





  return (
    <>
    {loading && <Loader/>}
    {postDetails && (
      <div className='container mx-auto px-10 mb-8'>
          {/* <Head>
              <title>write-code - {post.title}</title>
              <link rel='icon' href='/favicon.ico'/>
          </Head> */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
              <div className='col-span-1 lg:col-span-8'>
                  <PostDetail post={postDetails} />
                  <Author author={postDetails.author} />
                  <CommentsForm slug={postDetails.slug} />
                  <Comments comments={comments} />
              </div>
              <div className='col-span-1 lg:col-span-4'>
                  <div className='relative lg:sticky top-8'>
                      <PostWidget relatedPosts={relatedPosts} slug={postDetails.slug}  />
                      <Categories categories={categories} />
                  </div>
              </div>
          </div>
      </div>
    )}
    </>
  )
}

export default PostDetails