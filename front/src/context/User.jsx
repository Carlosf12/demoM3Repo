import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const UserContext = createContext({
    user: null,
    userAppointments: [],
    setUser: () => {},
    setUserAppointments: () => {}
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userAppointments, setUserAppointments] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/users/:id`); 
                setUser(response.data);
                const appointmentsResponse = await axios.get(`http://localhost:3000/appointments/${response.data.id}`); 
                setUserAppointments(appointmentsResponse.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <UserContext.Provider value={{ user, userAppointments, setUser, setUserAppointments }}>
            {children}
        </UserContext.Provider>
    );
};