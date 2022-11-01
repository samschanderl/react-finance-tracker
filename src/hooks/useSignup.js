import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [isCanceled, setIsCanceled ] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, displayName) => {
        // make sure the error is always null when recalling the signup function
        setError(null);
        setIsPending(true);

        try {
            // signup user
            const response = await projectAuth.createUserWithEmailAndPassword(email, password)

            if (!response) {
                throw new Error('Could not complete signup');
            }

            // add display name to user
            await response.user.updateProfile({ displayName });

            // dispatch login action
            dispatch({type: 'LOGIN', payload: response.user})

            // update state
            if (!isCanceled) {
                setIsPending(false);
                setError(null);
            }

        }
        catch (err) {
            // when we get an error, set the error so we can display it to the user
            if (!isCanceled) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    }

    useEffect(() => {
        return () => setIsCanceled(true);        
    }, [])


    return { error, isPending, signup}
}