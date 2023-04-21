import { createContext, useReducer, useContext } from "react";

const notificationReducer = (state, action) => {
    switch(action.type) {
        case 'ADD': return action.message
        case 'VOTE': return action.message
        default: return state
    }
}

const NotificationContext = createContext()

export const useNotificationValue = () => {
    const messageAndDispatch = useContext(NotificationContext)
    return messageAndDispatch[0]
}

export const useNotificationDispatch = () => {
    const messageAndDispatch = useContext(NotificationContext)
    return messageAndDispatch[1]
}

export const NotificationContextProvider = (props) => {
    const [message, messageDispatch] = useReducer(notificationReducer, null)

    return (
        <NotificationContext.Provider value={[message, messageDispatch]}>
            {props.children}
        </NotificationContext.Provider>
    )
}