import './SignInUp.css'
import { Link, Route } from 'react-router-dom'
import SignIn from '../../components/UserCreate/SignIn/SingIn'
import SignUp from '../../components/UserCreate/SignUp/SignUp'


export default function SignInUp(props) {
  const { handleLogin, handleRegister } = props

  return (
    <div className='UserContainer'>
      <div className='btncontainer'>
        <Link to='/user'>
          <button className='togglebtn'>Signin</button>
        </Link>
        <hr/>
        <Link to='/user/register'>
          <button className='togglebtn'>Signup</button>
        </Link>
      </div>
      <div className='logincomponent'>
        <Route exact path='/user'>
          <SignIn handleLogin={handleLogin} />
        </Route>
      </div>
      <div className='signupcomponent'>
        <Route exact path='/user/register'>
          <SignUp handleRegister={handleRegister} />
        </Route>
      </div>
    </div>
  )
}
