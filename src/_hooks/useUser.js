'use client'
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import initFirebase from "@/_services/firebase/initFirebase";
const useUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    initFirebase()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), user => {
            setUser(user);
            setIsLoading(false);
        })

        return unsubscribe
    }, [])
    return { user, isLoading }
}

export default useUser