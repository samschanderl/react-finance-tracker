import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

export const useCollection = (collection) => {
    const [document, setDocuments ] = useState(null);
    const [error, setError ] = useState(null);

    useEffect(() => {
        let ref = projectFirestore.collection(collection);
        
        // fire function anytime the collection changes (snapshot)
        const unsubscribe = ref.onSnapshot((snapshot) => {
            let results = [];
            snapshot.docs.forEach(doc => {
                results.push({ ...doc.data(), id: doc.id})
            })

            // update state
            setDocuments(results);
            setError(null);
        }, (error) => {
            console.log(error);
            setError('could not fetch the data', error.message)
        });

        // unsubscribe on unmount
        return () => unsubscribe()

    }, [collection]);

    return { documents, error}

}