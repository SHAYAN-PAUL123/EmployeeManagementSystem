import Header from '../../other/Header'
import CreateTask from '../../other/CreateTask'
import AllTask from '../../other/AllTask'
const AdminDashboard = ({data, handleLogout}) => {
 return (
    <div className='h-screen w-full p-7'>
        <Header data={data} handleLogout={handleLogout} />
        <CreateTask />
        <AllTask />
    </div>
 )
}

export default AdminDashboard
