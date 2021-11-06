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
        console.log(setPosts)
      }
      fetchPosts()
    }, [])

  useEffect(() => {
    const prefillFormData = () => {
      const postInfo = posts.find(post => post.id === Number(id))
      console.log(postInfo)
      // setFormData({
      //   content: postInfo.content,
      //   img_url: postInfo.img_url,
      //   link_url: postInfo.link_url,
      //   category_id: postInfo.category_id
      // })
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
    const { value } = e.target;
    setFormData({
      name: value,
    });
  };

  return (
    <form
    onSubmit={(e) => {
      e.preventDefault()
      handlePostUpdate(id, formData)
    }}
  >
    <select onChange={handleChange} name='category_id' defaultValue='default'>
      <option disabled value='default'>
        -- Select a Category --
      </option>

      {categories.map((category) => (
        <option value={category.id}>{category.title}</option>
      ))}
    </select>
    <br />
    <label>
      Message:
      <textarea type='text' name='content' value={content} onChange={handleChange} />
    </label>
    <br />
    <label>
      Image:
      <input type='text' name='img_url' value={img_url} onChange={handleChange} />
    </label>
    <br />
    <label>
      Link:
      <input type='text'name='link_url' value={link_url} onChange={handleChange} />
    </label>
    <br />  
    <button>Submit</button>
  </form>
  )
}
