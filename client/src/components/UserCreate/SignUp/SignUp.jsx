import './SignUp.css'
import { useState } from 'react'


export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const { username, email, password } = formData
  const { handleRegister, toggle } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className={`SignupContainer ${toggle ? 'addzindex' : ''}`}>
      <div className='signupForm'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleRegister(formData)
          }}
          className={`form ${toggle ? 'flipin' : 'flipout' }`}
        >
          <div className='usersignupcontainer'>
            <input 
              type='text'
              name='username'
              required
              value={username}
              onChange={handleChange}
              className='signupforminput'
            /> 
            <label className='labelcontent'>
              Username:
            </label>
          </div>
          <br />
          <div className='usersignupcontainer'>
            <input 
              type='text'
              name='email'
              required
              value={email}
              onChange={handleChange}
              className='signupforminput'
            />
            <label className='labelcontent'>
              Email:
            </label>
          </div>
          <br />
          <div className='usersignupcontainer'>
            <input 
              type='password'
              name='password'
              required
              value={password}
              onChange={handleChange}
              className='signupforminput'
            />
            <label className='labelcontent'>
              Password:
            </label>
          </div>
        <br />
        <button className='submit'>Signup</button>
        </form>
      </div>
    </div>
  )
}
