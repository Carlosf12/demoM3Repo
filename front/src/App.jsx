import './App.css';
import Navbar from "../src/components/Navbar/Navbar";
import MyAppointments from './views/MyAppointments/MyAppotinments';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import { HOME, MY_APPOINTMENTS, SLASH, USER_REGISTER } from './helpers/routes';
import Logout from './components/LogoutRouter/LogoutRouter';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path= {SLASH} element={<Login />} />
        <Route path='/logout' element={<Logout />}/>
        <Route path={MY_APPOINTMENTS} element={<MyAppointments />} />
        <Route path={USER_REGISTER} element={<Register />} />
      </Routes>
    </>
  )
}

export default App
