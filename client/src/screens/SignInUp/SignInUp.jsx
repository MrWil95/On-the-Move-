// import { useState } from 'react'
import SignIn from '../../components/UserCreate/SignIn/SingIn'
import SignUp from '../../components/UserCreate/SignUp/SignUp'


export default function SignInUp(props) {
  // const [toggleClass, setToggleClass] = useState(false)
  const { handleLogin, handleRegister } = props

  // const toggleState = () => {
  //   setToggleClass(!prevState)
  // }

  return (
    <div className='UserContainer' style={{display: "grid", justifyContent: "center ", height: "100vh", width: "100vw"}}>
      {/* <div className='btncontainer' style={{gridRow: "2 / 3"}}>
        <button onClick={toggleState} className='togglebtn' style={{background: "none", border: "none"}}>Signin</button>
        <button onClick={toggleState} className='togglebtn' style={{background: "none", border: "none"}}>Signup</button>
      </div> */}
      <SignIn handleLogin={handleLogin} className={toggleClass ? 'Disabled' : null} style={{gridRow: "2 / 3" }}/>
      <SignUp handleRegister={handleRegister} className={toggleClass ? 'Disabled' : null}/>
    </div>
  )
}
