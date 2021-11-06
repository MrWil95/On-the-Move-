import { useState } from 'react'
import { getCategories } from '../../services/posts'

export default function PostCreate() {
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [formData, setFormData] = useState({
    content: '',
    img_url: '',
    link_url: '',
  })
  const { content, img_url, link_url } = formData

  useEffect(() => {
    const fetchCategories = async () => {
      const postList = await getCategories();
      setCategories(postList);
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target
    setFormData({
      content: value,
      img_url: value,
      link_url: value,
    })
  }

  const handleCategoryChange = (e) => {
    const { value } = e.target
    setSelectedCategory(value)
  }

  const handlePostCreate = async (formData) => {
    const newFood = await createPost(formData)
    setPosts((prevState) => [...prevState, newFood])
    history.push('/foods')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const foodItem = await addFlavorToFood(selectedFlavor, id)
    setFoodItem(foodItem)
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handlePostCreate(formData)
      }}
    >
      <label>
        Message:
        <textarea type='text' value={content} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image:
        <input type='text' value={img_url} onChange={handleChange} />
      </label>
      <br />
      <label>
        Link:
        <input type='text' value={link_url} onChange={handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
