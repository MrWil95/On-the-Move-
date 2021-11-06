import { useState } from 'react'

export default function PostCreate() {
  const []
  const [formData, setFormData] = useState({
    name: '',
  });
  const { name } = formData;


  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({
      name: value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleFoodCreate(formData);
      }}
    >
      <h1>Create Food</h1>
      <label>
        Name:
        <input type='text' value={name} onChange={handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
