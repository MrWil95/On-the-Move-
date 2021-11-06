import './App.css'
import {Route} from 'react-router-dom'
import About from './screens/About/About'
import Events from './screens/Events/Events'
import Home from './screens//Home/Home'
import Layout from './components/Layout/Layout'
import Resources from './screens/Resources/Resources'
import SignInUp from './screens/SignInUp/SignInUp'
import PostCreate from './screens/PostCreate/PostCreate'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { 
  loginUser, 
  registerUser, 
  removeToken, 
  verifyUser 
} from './services/auth'
import PostEdit from './screens/PostEdit/PostEdit'

export default function App() {
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
    <div className='App'>
      <Layout
        currentUser={currentUser} 
        handleLogout={handleLogout}
      >
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/resources'>
          <Resources />
        </Route>
        <Route exact path='/events'>
          <Events />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route path='/user'>
          <SignInUp 
            currentUser={currentUser}
            handleLogin={handleLogin}
            handleRegister={handleRegister}
            handleLogout={handleLogout}
          />
        </Route>
        <Route exact path='/create'>
          <PostCreate />
        </Route>
        <Route exact path='/edit'>
          <PostEdit />
        </Route>
      </Layout>
    </div>
  )
}

