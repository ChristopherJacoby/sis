import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase.util';

export const useCreateStudent = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [isCancelled, setIsCancelled] = useState(false);

    const createStudent = async (studentID, fname, lname, email, birthDate, phone) => {
        setError(null);
        setIsPending(true);

        try {
            //create entry in database
            const response = await db.collection('students').add({
                studentID: studentID,
                fname: fname,
                lname: lname,
                dob: birthDate,
                phone: phone,
                email: email
            })

            if (!response) {
                throw new Error("Could not send to Firestore.");
            }

            //update state
            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }

        } catch (error) {
            console.log(error.message);
            setError(error.message)
            setIsPending(false)
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, []);

    return { error, isPending, createStudent }
}