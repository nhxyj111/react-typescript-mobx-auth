import React, { useState, useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
// import { AxiosError } from 'axios'
import Home from './pages/Home'
import Admin from './pages/Admin'
import { AuthContext } from './context/auth'
import PrivateRoute from './PrivateRoute'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { RootStoreContext } from './stores/root'
// import { axiosInstance } from './axios'
// import { useFetchCancel } from './utils/hooks'

const App: React.FC = observer(() => {
  const [authToken, setAuthToken] = useState<string | null>(null)
  const { errorStore } = useContext(RootStoreContext)

  useEffect(() => {
    errorStore.globalError = ''
  }, [])

  //
  // const { data, error } = useFetchCancel<{ a: string }>('http://www.x.com', {
  //   a: '',
  // })
  // if (error) console.log(error.message)
  // if (error) console.log(((error as unknown) as AxiosError).message)

  // axiosInstance
  //   .post('http://www.ss.com', {
  //     name: 'xxx',
  //   })
  //   .catch((err: AxiosError) => console.log(err.message))

  const setToken = (token: string) => {
    localStorage.setItem('token', token)
    setAuthToken(token)
  }

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
      <Router>
        <div>
          {errorStore.globalError ? errorStore.globalError : null}
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
})

export default App
