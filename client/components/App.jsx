import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import Fruits from './Fruits'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
import ProfilePage from './Profile/CreateProfilePage'
import CreatePetProfile from './Profile/CreatePetProfile'
import PetProfile from './Profile/PetProfile'
import FrontPage from './FrontPage'
import Register from './Register'
import Chat from './Chat'

function App () {
  cacheUser(useAuth0)
  return (
    <Router>
      <Route path='/' component={FrontPage} />
      <Route path='/' component={Nav} />
      <Route path='/chat' component={Chat} />
      <Route exact path='/' component={Fruits} />
      <Route exact path='/profile/create' component={ProfilePage} />
      <Route exact path='/petprofile/create' component={CreatePetProfile} />
      <Route exact path='/petprofile' component={PetProfile} />
      {/* <Route exact path='/' component={Fruits} /> */}
      {/* <Route exact path='/profile' component={ProfilePage} /> */}
    </Router>
  )
}

export default App
