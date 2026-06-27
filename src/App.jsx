import Login from './components/auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { useContext, useState } from 'react'
import { AuthContext } from './context/AuthContext'

const App = () => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('loggedInUser'))
    } catch {
      return null
    }
  })

  const data = useContext(AuthContext)

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify('admin'))
    }
    else if (data && data.employees) {
      const employee = data.employees.find(
        (e) => email === e.email && password === e.password
      )

      if (employee) {
        setUser(employee)
        localStorage.setItem('loggedInUser', JSON.stringify(employee))
      } else {
        alert('INVALID')
      }
    }
    else {
      alert('INVALID')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setUser(null)
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' && (
        <AdminDashboard data={data} handleLogout={handleLogout} />
      )}

      {user && user !== 'admin' && (
        <EmployeeDashboard data={user} handleLogout={handleLogout} />
      )}
    </>
  )
}

export default App


//buttons @ employeeDashboard && set user in localStorage