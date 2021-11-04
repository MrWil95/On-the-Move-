import './App.css'
import { Route } from 'react-router-dom'
import About from './screens/About/About'
import Comments from './screens/Comments/Comments'
import Events from './screens/Events/Events'
import Home from './screens//Home/Home'
import PostCreate from './screens/PostCreate/PostCreate'
import PostEdit from './screens/PostEdit/PostEdit'
import Resources from './screens/Resources/Resources'
import SignInUp from './screens/SignInUp/SignInUp'


export default function App() {
  return (
    <div className='App'>
      <Route exact path='/'>
        
      </Route>
    </div>
  )
}

