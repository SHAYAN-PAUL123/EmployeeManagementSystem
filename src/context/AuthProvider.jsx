import { useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'
import { AuthContext } from './AuthContext'

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const { employees, admin } = getLocalStorage();
    return {
      employees: employees ?? [],
      admin: admin ?? [],
    }
  })

  return (
    <AuthContext.Provider value={{ ...userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
