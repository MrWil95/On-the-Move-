import SignIn from '../../components/UserCreate/SignIn/SingIn'
import SignUp from '../../components/UserCreate/SignUp/SignUp'

export default function SignInUp(props) {
  const { handleLogin, handleRegister } = props

  return (
    <div className='UserContainer'>
      <button>Signin</button>
      <button>Signup</button>
      <SignIn handleLogin={handleLogin} />
      <SignUp handleRegister={handleRegister} />
    </div>
  )
}
