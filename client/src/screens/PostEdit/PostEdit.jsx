import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { editPost, fetchAllPosts, getCategories } from '../../services/posts'
import { useHistory } from 'react-router'

export default function PostEdit() {
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [formData, setFormData] = useState({
    content: '',
    img_url: '',
    link_url: '',
    category_id: '',
  })
  const { content, img_url, link_url, category_id } = formData
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await fetchAllPosts()
      setPosts(postList)
    }
    fetchPosts()
  }, [])

  useEffect(() => {
    const prefillFormData = () => {
      const postInfo = posts.find(post => post.id === Number(id))
      setFormData({
        content: postInfo.content,
        img_url: '',
        link_url: '',
        category_id: postInfo.category_id
      })
    }
    if (posts.length) {
      prefillFormData()
    }
  }, [posts, id])

  useEffect(() => {
    const fetchCategories = async () => {
      const postCategories = await getCategories()
      setCategories(postCategories);
    };
    fetchCategories()
  }, [])

  const handlePostUpdate = async (id, formData) => {
    const newPost = await editPost(id, formData)
    const category = categories.find(cat => {
      return cat.id === Number(formData.category_id)
    })
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? newPost : post
      })
    )
    history.push(`/${category.title}`)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='MainContainer'>
      <div className='Form'>
        <form
        onSubmit={(e) => {
          e.preventDefault()
          handlePostUpdate(id, formData)
        }}>
        <select onChange={handleChange} name='category_id' defaultValue='category_id' className='selectbar'>
          <option disabled value={category_id}>
            -- Select a Category --
          </option>
          {categories.map((category, index) => (
            <option value={category.id} key={index}>{category.title}</option>
          ))}
        </select>
        <br />
        <label className='messagecontent'>
          Message:
        </label>
        <textarea type='text' name='content' value={content} onChange={handleChange} className='textarea' />
        <br />
        <label className='imageurl'>
          Image:
        </label>
        <input type='text' name='img_url' value={img_url} onChange={handleChange} className='forminput' />
        <br />
        <label className='linkurl'>
          Link:
        </label>
        <input type='text'name='link_url' value={link_url} onChange={handleChange} className='forminput' />
        <br />  
        <button className='submit'>Submit</button>
      </form>
    </div>
  </div>
  )
}
