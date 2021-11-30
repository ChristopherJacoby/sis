import { useReducer, useEffect, useState } from 'react';
import { db, timestamp } from '../firebase/firebase.util';


const initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
};

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING':
            return { isPending: true, document: null, success: false, error: null }
        case 'ADDED_DOCUMENT':
            return { isPending: false, document: action.payload, success: true }
        case 'ERROR':
            return { isPending: false, document: null, success: false, error: action.payload }
        default:
            return state
    }
}


export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);

    //collection ref
    const ref = db.collection(collection);

    const dispatchIfNotCancelled = (action) => {
        if (!isCancelled) {
            dispatch(action);
        }
    }

    //add a document
    const addDocument = async (doc) => {
        dispatch({ type: 'IS_PENDING' })
        try {
            const createdAt = timestamp.fromDate(new Date())
            const addedDocument = await ref.add(...doc, createdAt);
            dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
        }
        catch (error) {
            dispatchIfNotCancelled({ type: 'ERROR', payload: error.message })
        }
    }

    //delete document
    const deleteDocument = (id) => {

    }

    useEffect(() => {

        return () => {
            setIsCancelled(true);
        };
    }, []);

    return { addDocument, deleteDocument, response }
}