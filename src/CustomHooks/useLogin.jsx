import { useState, useEffect } from 'react'
import { auth } from '../firebase/firebase.util';
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [isCancelled, setIsCancelled] = useState(false);
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setError(null);
        setIsPending(true);

        try {
            const res = await auth.signInWithEmailAndPassword(email, password)

            //dispatch login option
            dispatch({ type: "LOGIN", payload: res.user })

            setIsPending(false)
            setError(null);
            console.log(res.user)

            //update state
            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }
        }
        catch (error) {
            console.log(error.message);
            setError(error.message)
            setIsPending(false)
        }

    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, []);

    return { login, error, isPending }
}