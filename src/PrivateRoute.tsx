import React, { FunctionComponent } from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'
import { useAuth } from './context/auth'

interface IProps extends RouteProps {
  component: FunctionComponent<any>
}

const PrivateRoute: React.FC<IProps> = ({ component: Component, ...rest }) => {
  const { authToken } = useAuth()

  return (
    <Route
      {...rest}
      render={props =>
        authToken ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

export default PrivateRoute
