import React, { createContext, useState, useContext, useEffect } from 'react';
const Studzone = createContext();

const StudzoneContext = ({ children }) => {
    const [ user, setUser ] = useState({
        id: null
    });

    console.log(JSON.parse(localStorage.getItem('profile')));

    // useEffect(() => {
    // if (user.id) {
    //     localStorage.setItem('profile', JSON.stringify({ user }));
    //     setTimeout(() => localStorage.clear(), 3600000);
    // } else {
    //     if (JSON.parse(localStorage.getItem('profile'))) {
    //         setUser(JSON.parse(localStorage.getItem('profile')));
    //     }
    // }

    // }, [ user ]);

    // console.log(JSON.parse(localStorage.getItem('profile')));

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