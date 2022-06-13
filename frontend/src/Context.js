import React, { createContext, useState, useContext } from 'react';
const Studzone = createContext();

const StudzoneContext = ({ children }) => {
    const [ user, setUser ] = useState({
        id: 'SI204'
    });
    return (
        <Studzone.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </Studzone.Provider>
    )
}

export default StudzoneContext;

export const StudzoneState = () => {
    return useContext(Studzone);
};