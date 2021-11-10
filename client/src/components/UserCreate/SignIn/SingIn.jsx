import './SignIn.css'
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
    <div className='MainContainer'>
      <div className='Form'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleLogin(formData)
          }} 
        >
          <label className='messagecontent'>
            Username:
          </label>
          <input 
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
            className='forminput'
          />
          <br />
          <label className='messagecontent'>
            Password:
          </label>
          <input 
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            className='forminput'
          />
          <br />
          <button className='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}
