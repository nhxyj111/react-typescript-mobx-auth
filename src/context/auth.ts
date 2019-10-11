import { createContext, useContext } from 'react'

interface IAuthContext {
  authToken: string | null
  setAuthToken: (token: string) => void
}

export const AuthContext = createContext<IAuthContext>({
  authToken: '',
  setAuthToken(_: string) {},
})

export function useAuth() {
  return useContext(AuthContext)
}
