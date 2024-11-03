import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const UserContext = createContext({
    user: {},
    userAppointments: [],
    setUser: () => {},
    fetchAppointments: () => {},
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userAppointments, setUserAppointments] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = sessionStorage.getItem('userId');
                if(!userId) return;
                const userResponse = await axios.get(`http://localhost:3000/users/${userId}`); 
                setUser(userResponse.data);
                const appointmentsResponse = await axios.get(`http://localhost:3000/appointments/${response.data.id}`); 
                setUserAppointments(appointmentsResponse.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);

    const fetchAppointments = async (app) => {
        try {
            const response = await axios.post("http://localhost:3000/appointments", app);
            setUserAppointments([...userAppointments, response.data]);
        } catch (error) {
            console.error("Error fetching appointments:", error);
        }
    }

    return (
        <UserContext.Provider value={{ user, userAppointments, fetchAppointments, setUser}}>
            {children}
        </UserContext.Provider>
    );
};