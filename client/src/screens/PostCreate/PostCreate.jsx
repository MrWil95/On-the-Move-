import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getCategories, createPost } from '../../services/posts'

export default function PostCreate() {
  const [categories, setCategories] = useState([])
  const [formData, setFormData] = useState({
    content: '',
    img_url: '',
    link_url: '',
    category_id: '',
  })
  const { content, img_url, link_url, category_id } = formData
  const history = useHistory()

  useEffect(() => {
    const fetchCategories = async () => {
      const postList = await getCategories()
      setCategories(postList);
    };
    fetchCategories()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handlePostCreate = async (formData) => {
    await createPost(formData)
    const category = categories.find(cat => {
      return cat.id === Number(formData.category_id)
    })
    history.push(`/${category.title}`)
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handlePostCreate(formData)
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
  );
}
