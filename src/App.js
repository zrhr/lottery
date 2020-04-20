import React from 'react';
import {
  Router,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './Home'
import {createBrowserHistory} from 'history'
import Callback from './Callback'

import { withAuthenticator } from 'aws-amplify-react';
const history = createBrowserHistory();

function App() {
  const [session, setSession]=React.useState({session:"", isLoggedIn:false})
  return(
  <Router history={history}>
    <Route exact path= "/" render={(props)=><Home {...props} session={session}/> }/>
    <Route exact path= "/callback" render={(props)=><Callback {...props} session={session}/>} />
  </Router>
  )
}

export default withAuthenticator(App, true);
