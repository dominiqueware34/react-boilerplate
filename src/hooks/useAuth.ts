import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { IUser } from '../context/AuthContext';

export const useAuth = () => {
    const [ state, setState ] = useState(() => {
        const user = auth.currentUser
        return { initializing: !user, user, }
    });
    const onChange = (user: any) => setState({ initializing: false, user });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(onChange)
        return () => {
            unsubscribe();
        };
    }, []);

    return state;
}