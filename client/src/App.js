import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
// import Auth from "./utils/Auth";
import LoginPage from "./pages/login";
import Landing from "./pages/landing"
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Board from "./pages/board";
import Nav from "./components/Nav";
// import NoMatch from "./pages/NoMatch"
// import './pages/style.css';
import { UserProvider } from "./utils/UserContext";
const dotenv = require('dotenv').config()

const AuthExample = () => (
  <UserProvider>
    <Router>
      <div>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/dashboard/:name" component={Board}/>
            {/* <Route path="*" component={NoMatch} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  </UserProvider>
)




export default AuthExample
