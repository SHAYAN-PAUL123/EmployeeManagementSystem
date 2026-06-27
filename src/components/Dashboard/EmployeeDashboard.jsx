import { useContext } from 'react'
import Header from '../../other/Header'
import TaskListNumbers from '../../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthContext'

const EmployeeDashboard = ({data, handleLogout}) => {
  const { employees, setUserData } = useContext(AuthContext)
  const currentEmployee = employees.find((employee) => employee.id === data.id) ?? data

  const updateTaskStatus = (taskIndex, status) => {
    setUserData((currentData) => {
      const updatedEmployees = currentData.employees.map((employee) => {
        if (employee.id !== currentEmployee.id) {
          return employee
        }

        const updatedTasks = employee.tasks.map((task, index) => {
          if (index !== taskIndex) {
            return task
          }

          return {
            ...task,
            active: status === 'active',
            newTask: status === 'newTask',
            completed: status === 'completed',
            failed: status === 'failed',
          }
        })

        return {
          ...employee,
          tasks: updatedTasks,
          taskCounts: {
            active: updatedTasks.filter((task) => task.active).length,
            newTask: updatedTasks.filter((task) => task.newTask).length,
            completed: updatedTasks.filter((task) => task.completed).length,
            failed: updatedTasks.filter((task) => task.failed).length,
          },
        }
      })

      const updatedEmployee = updatedEmployees.find(
        (employee) => employee.id === currentEmployee.id
      )

      localStorage.setItem('employees', JSON.stringify(updatedEmployees))
      localStorage.setItem('loggedInUser', JSON.stringify(updatedEmployee))

      return {
        ...currentData,
        employees: updatedEmployees,
      }
    })
  }

  return (
    <div className='bg-[#1c1c1c] h-screen p-10'>
    <Header data={currentEmployee} handleLogout={handleLogout}/>
    <TaskListNumbers data={currentEmployee} />
    <TaskList data={currentEmployee} updateTaskStatus={updateTaskStatus}/>
    </div>
  )
}

export default EmployeeDashboard
