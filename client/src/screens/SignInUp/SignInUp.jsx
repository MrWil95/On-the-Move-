import { useState, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import SignIn from '../../components/UserCreate/SignIn/SingIn'
import SignUp from '../../components/UserCreate/SignUp/SignUp'
import { 
  loginUser, 
  registerUser, 
  removeToken, 
  verifyUser 
} from '../../services/auth'

export default function SignInUp() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])

    const handleLogin = async (formData) => {
      const userData = await loginUser(formData)
      setCurrentUser(userData)
      history.push('/')
    }

    const handleRegister =  async (formData) => {
      const userData = await registerUser(formData)
      setCurrentUser(userData)
      history.push('/')
    }

    const handleLogout = () => {
      setCurrentUser(null)
      localStorage.removeItem('authToken')
      removeToken()
    }

  return (
    <div className='UserContainer'>
      <Layout 
        currentUser={currentUser} 
        handleLogout={handleLogout}
      >
        <Route path='/login'>
          <SignIn handleLogin={handleLogin} />
        </Route>
        <Route path='/register'>
          <SignUp handleRegister={handleRegister} />
        </Route>
      </Layout>
    </div>
  )
}
