import { Children, createContext, useEffect, useState } from "react";

export const UserContext = createContext({
    authenticated: false,
    setAuthenticated: () => null
})

export const UserProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false)
    const value = { authenticated, setAuthenticated }
    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            setAuthenticated(true)
        }
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}