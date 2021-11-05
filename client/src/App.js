import './App.css'
import {Route} from 'react-router-dom'
import About from './screens/About/About'
import Events from './screens/Events/Events'
import Home from './screens//Home/Home'
import Resources from './screens/Resources/Resources'
import SignInUp from './screens/SignInUp/SignInUp'


export default function App() {
  return (
    <div className='App'>
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
          <SignInUp />
        </Route>
    </div>
  )
}

