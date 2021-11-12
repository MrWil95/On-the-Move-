import './Comments.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOnePost } from '../../services/posts'

export default function Comments() {
  const [post, setPost] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const postDetails = await getOnePost(id)
      setPost(postDetails)
    }
    fetchPost()
  }, [id])

  return (
    <div className='Container'>
      <div className='postcontainer'>
        <div className='username'>
          <h3>{post?.username}</h3>
        </div>
        <div className='postcontent'>
          <p>{post?.content}</p>
        </div>
        {post?.comments?.map((comment, index) => (
          <div className='commentcontainer' key={index} style={{backgroundColor: "white", padding: ".02em 0 .02em 1em"}}>
            <p >{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}