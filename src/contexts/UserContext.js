import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [hotels, setHotels] = useState([]);
    const [bookingHotel, setBookingHotel] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/hotels')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])
    //booking button eventhandler
    const handleBooking =(id)=>{
        console.log(id);
        const selectHotel = hotels.find(hotel=> hotel.id === id);
        setBookingHotel(selectHotel);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log('logout successful');
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log('state changed');
            setUser(user)
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])

    const authInfo = { hotels, user, createUser, signIn, logOut, loading, handleBooking, bookingHotel };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;