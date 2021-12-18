import './SignIn.css'
import { useState } from 'react'

export default function SingIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { username, password } = formData
  const { handleLogin, toggle } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className={`SigninContainer ${toggle ? 'subtractzindex' : ''}`}>
      <div className='signinForm'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleLogin(formData)
          }}
          className={`form ${toggle ? 'flipout' : 'flipin'}`}
        >
          <div className='userlogincontainer'>
            <input 
              type='text'
              name='username'
              required
              value={username}
              onChange={handleChange}
              className='signinforminput'
            />
            <label className='labelcontent'>
              Username:
            </label>
          </div>
          <br />
          <div className='userlogincontainer'>
            <input 
              type='password'
              name='password'
              required
              value={password}
              onChange={handleChange}
              className='signinforminput'
            />
            <label className='labelcontent'>
              Password:
            </label>
          </div>
          <br />
          <button className='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}
