import './App.css'
import Navbar from "../src/components/Navbar/Navbar"
import MyAppointments from './views/MyAppointments/MyAppotinments'
import  Register  from './views/Register/Register'
import Login from './views/Login/Login'

function App() {

  return (
    <>
      <Navbar />
      {/* <MyAppointments /> */}
      {/* <Register /> */}
      <Login />
    </>
  )
}

export default App
