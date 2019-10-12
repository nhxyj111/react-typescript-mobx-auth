import React, { useState, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
// import axios from 'axios'
import { observer } from 'mobx-react-lite'
import logoImg from '../logo.svg'
import { Card, Logo, Form, Input, Button, Error } from '../components/AuthForm'
// import { useAuth } from '../context/auth'
import { RootStoreContext } from '../stores/root'

interface IProps {}

const Login: React.FC<IProps> = observer(() => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { authStore } = useContext(RootStoreContext)

  if (authStore.token) {
    return <Redirect to="/" />
  }

  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input
          type="username"
          value={username}
          onChange={e => {
            setUsername(e.target.value)
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value)
          }}
          placeholder="password"
        />
        <Button onClick={() => authStore.login(username, password)}>
          Sign In
        </Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
    </Card>
  )
})

export default Login

// import React, { useState } from 'react'
// import { Link, Redirect } from 'react-router-dom'
// import axios from 'axios'
// import logoImg from '../logo.svg'
// import { Card, Logo, Form, Input, Button, Error } from '../components/AuthForm'
// import { useAuth } from '../context/auth'

// interface IProps {}

// const Login: React.FC<IProps> = () => {
//   const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
//   const [isError, setIsError] = useState<boolean>(false)
//   const [userName, setUserName] = useState<string>('')
//   const [password, setPassword] = useState<string>('')
//   const { setAuthToken } = useAuth()

//   function postLogin() {
//     axios
//       .post('https://www.xxxx.com/auth/login', {
//         userName,
//         password,
//       })
//       .then(result => {
//         if (result.status === 200) {
//           setAuthToken(result.data)
//           setLoggedIn(true)
//         } else {
//           setIsError(true)
//         }
//       })
//       .catch(e => {
//         setIsError(true)
//       })
//   }

//   if (isLoggedIn) {
//     return <Redirect to="/" />
//   }

//   return (
//     <Card>
//       <Logo src={logoImg} />
//       <Form>
//         <Input
//           type="username"
//           value={userName}
//           onChange={e => {
//             setUserName(e.target.value)
//           }}
//           placeholder="email"
//         />
//         <Input
//           type="password"
//           value={password}
//           onChange={e => {
//             setPassword(e.target.value)
//           }}
//           placeholder="password"
//         />
//         <Button>Sign In</Button>
//       </Form>
//       <Link to="/signup">Don't have an account?</Link>
//       {isError && (
//         <Error>The username or password provided were incorrect!</Error>
//       )}
//     </Card>
//   )
// }

// export default Login
