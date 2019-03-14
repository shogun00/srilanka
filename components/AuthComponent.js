import { useState, useEffect, createContext } from 'react'

export const AuthContext = createContext()

const initialUser = { id: 1, name: 'User1', role: 'admin' }
// FIX: get from LocalStorage
const token = 'token'

const AuthComponent = ({ children }) => {
  const [user, setUser] = useState(initialUser)
  useEffect(() => {
    if (token) {
    } else {
      setUser(null)
    }
  }, [user])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export default AuthComponent
