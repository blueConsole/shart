import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();

        // Listen for changes in authentication state
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true); // User is authenticated
            } else {
                setIsLoggedIn(false); // User is not authenticated
                navigate('/login'); // User is not authenticated, navigate to the login page
            }
        });

        // Unsubscribe from the listener when the component unmounts
        return () => unsubscribe();
    }, [navigate]);

    if (isLoggedIn) {
        return children;
    } else {
        return null; // Don't render anything while navigating
    }
};

export default AuthGuard;
