import { createContext, useState, useContext } from "react";
import axios from 'axios';


export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userAppointments, setUserAppointments] = useState([]);
    const login = (userData) => {
        setUser(userData);
    };
    const logout = () => {
        setUser(null);
    }

    const updateUser = (userData) => {
        console.log("Actualizando usuario en contexto:", userData);
        setUser(userData);
    };

    const updateUserAppointments = (appointment) => setUserAppointments(appointment);

    const addAppointment = (appointment) => {
        setUserAppointments((prevAppointment) => [...prevAppointment, appointment]);
    };

    const cancelAppointment = async (appId) => {
        try {
            await axios.put(`http://localhost:3000/appointments/cancel/${appId}`);
            setUserAppointments((prevApp) => prevApp.filter((app) => app.id !== appId));
        } catch (error) {
            console.error("Error al cancelar la cita:", error)
        };
    };

    return (
        <UserContext.Provider value={{ user, userAppointments, updateUser, updateUserAppointments, addAppointment, cancelAppointment, logout, login}}>
            {children}
        </UserContext.Provider>
    );
};