import React, { createContext, useState } from "react";


export const DataContext = createContext();

export const DataProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState({});
    return (
        <DataContext.Provider value={
            [loggedIn, setLoggedIn]
        }>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContext;