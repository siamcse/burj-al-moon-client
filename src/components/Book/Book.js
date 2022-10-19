import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Book = () => {
    const { user, bookingHotel } = useContext(AuthContext);
    return (
        <div>
            <h2>Booking is coming soon: {user?.email}</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                    <div>
                        <h1 className="text-5xl font-bold">Your Booking Hotel</h1>
                        <p className="py-6 w-3/4">This Hotel is very famous in the moon. You are lucky person by booking this hotel.Please enjoy!!</p>
                        <button className="btn btn-primary"><Link to='/'>Cancel Booking</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;