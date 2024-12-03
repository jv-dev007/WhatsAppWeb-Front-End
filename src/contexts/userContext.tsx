import { createContext, useState } from "react";

export const UserContext = createContext({} as any)

export const UserStorage = ({children}: any) => {
    const [name, setName] = useState("")
    const [joined, setJoined] = useState(false)
    const [users, setUsers] = useState([])
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const [userEmit, setUserEmit] = useState(false)

    return (
        <UserContext.Provider value={{name, setName, joined, setJoined, users, setUsers, message, setMessage, messages, setMessages, userEmit, setUserEmit}}>
            {children}
        </UserContext.Provider>
    )
}