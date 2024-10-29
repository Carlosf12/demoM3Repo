import './App.css';
import Navbar from "../src/components/Navbar/Navbar";
import MyAppointments from './views/MyAppointments/MyAppotinments';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' element />
        <Route path='/' element={<Login />} />
        <Route path='/appointments/:id' element={<MyAppointments />} />
        <Route path='/users/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
