import { useState } from 'react'


export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const { username, email, password } = formData
  const { handleRegister } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='SignupContainer'>
      <div className='Form'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleRegister(formData)
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
            Email:
          </label>
          <input 
            type='text'
            name='email'
            value={email}
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
        <button className='submit'>Signup</button>
        </form>
      </div>
    </div>
  )
}
