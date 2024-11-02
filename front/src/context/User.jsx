import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const UserContext = createContext({
    loggedUser: null,
    setLoggedUser: () => { }
});

export const UserProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:3000/users');
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
            {children}
        </UserContext.Provider>
    );
};