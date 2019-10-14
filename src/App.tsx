import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
// import { AxiosError } from 'axios'
import Home from './pages/Home'
import Admin from './pages/Admin'
// import { AuthContext } from './context/auth'
import PrivateRoute from './PrivateRoute'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { RootStoreContext } from './stores/root'
// import { axiosInstance } from './axios'
// import { useFetchCancel } from './utils/hooks'

const App: React.FC = observer(() => {
  // const [authToken, setAuthToken] = useState<string | null>(null)
  const { errorStore } = useContext(RootStoreContext)

  errorStore.globalError = ''

  useEffect(() => {
    //
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

  // const setToken = (token: string) => {
  //   localStorage.setItem('token', token)
  //   setAuthToken(token)
  // }

  return (
    <Router>
      <div>
        {errorStore.globalError ? errorStore.globalError : null}
        <ul>
          <li>
            <Button as={Link} to="/">
              Home Page
            </Button>
          </li>
          <li>
            <Button as={Link} to="/admin">
              Admin Page
            </Button>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/admin" component={Admin} />
      </div>
    </Router>
  )
})

export default App
