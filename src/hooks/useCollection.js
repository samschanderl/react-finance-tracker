import { useEffect, useState, useRef } from 'react';
import { projectFirestore } from '../firebase/config';

export const useCollection = (collection, _query, _orderBy) => {
    const [documents, setDocuments ] = useState(null);
    const [error, setError ] = useState(null);

    // wrapping the array in a ref so the component won't be reevaluated every time
    const query = useRef(_query).current;
    const orderBy = useRef(_orderBy).current

    useEffect(() => {
        let ref = projectFirestore.collection(collection);

        // if we don't use a ref --> infinite loop in useEffect
        // _query is an array and is "different" on every function call
        if (query) {
            ref = ref.where(...query)
        }
        // if (orderBy) {
        //     ref = ref.orderBy(...orderBy)
        // }
        
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

    }, [collection, query, orderBy]);

    return { documents, error}

}