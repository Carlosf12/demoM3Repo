import './App.css'
import Navbar from "../src/components/Navbar/Navbar"
import MyAppointments from './views/MyAppointments/MyAppotinments'
import  Register  from './views/Register/Register'

function App() {

  return (
    <>
      <Navbar />
      {/* <MyAppointments /> */}
      <Register />
    </>
  )
}

export default App
