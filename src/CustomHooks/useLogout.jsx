import { auth } from '../firebase/firebase.util';
import { useState, useEffect } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [isCancelled, setIsCancelled] = useState(false);
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null);
        setIsPending(true);

        try {
            await auth.signOut()

            //dispatch logout option
            dispatch({ type: "LOGOUT" })

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

    return { logout, error, isPending }
}