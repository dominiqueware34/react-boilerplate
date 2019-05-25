import { createContext } from 'react';


export interface IUser {
    user: firebase.User | null
}

export const AuthContext = createContext<IUser>({
    user: null
})
