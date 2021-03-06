import { useState, useEffect } from 'react';
import { auth } from '../firebase/firebase.util';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [isCancelled, setIsCancelled] = useState(false);
    const { dispatch } = useAuthContext()

    const signup = async (email, password, displayName) => {
        setError(null);
        setIsPending(true);

        try {
            //sign up user
            const res = await auth.createUserWithEmailAndPassword(email, password)

            if (!res) {
                throw new Error("Could not complete Signup");
            }

            //update state
            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }

            //add Displayname to user
            await res.user.updateProfile({ displayName })

            //dispatch login action
            dispatch({ type: "LOGIN", payload: res.user })

        } catch (error) {
            console.log(error.message);
            setError(error.message)
            setIsPending(false)
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, []);

    return { error, isPending, signup }
}