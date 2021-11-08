import { useState } from 'react'

export default function SingIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { username, password } = formData
  const { handleLogin } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='SigninForm'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleLogin(formData)
        }} 
      >
        <label>
          Username:
          <input 
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input 
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Login</button>
      </form>
    </div>
  )
}
