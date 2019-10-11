import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import { AuthContext } from './context/auth'
import PrivateRoute from './PrivateRoute'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App: React.FC = () => {
  const [authToken, setAuthToken] = useState<string | null>(null)

  const setToken = (token: string) => {
    localStorage.setItem('token', token)
    setAuthToken(token)
  }

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/admin">Admin Page</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/admin" component={Admin} />
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
