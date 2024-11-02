import { createContext, useState } from "react";

export const AppoitmentsContext = createContext({
    appointments:[],
    setApps:()=>{},
});

export const AppointmentsProvider = ({appointments}) => {

    const [apps, setApps] = useState([]);

    const value = {
        apps,
        setApps,
    };

    return(
        <AppoitmentsContext.Provider value={value}>{appointments}</AppoitmentsContext.Provider>
    );
};