import './SignInUp.css'
import { useState } from 'react'
import SignIn from '../../components/UserCreate/SignIn/SingIn'
import SignUp from '../../components/UserCreate/SignUp/SignUp'


export default function SignInUp(props) {
  const [toggle, setToggle] = useState(false)
  const { handleLogin, handleRegister } = props

  const toggleClass = () => {
    setToggle(prevState => {
      return !prevState
    })
  }

  return (
    <div className='UserContainer'>
      <div className='btnContainer'>
        <button onClick={toggleClass} className='togglebtn'>Signin</button>
        <div className='line'></div>
        <button onClick={toggleClass} className='togglebtn'>Signup</button>
      </div>
      <>
        <SignIn handleLogin={handleLogin} toggle={toggle}/>
      </>
      <>
        <SignUp handleRegister={handleRegister} toggle={toggle}/>
      </>
    </div>
  )
}
