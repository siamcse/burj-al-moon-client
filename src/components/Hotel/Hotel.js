import React, { useContext } from 'react';
import { FaMale, FaFemale, FaBed, FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Hotel = ({ hotel }) => {
    const { handleBooking } = useContext(AuthContext);
    const { id, name, balance, bed, person } = hotel;
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>This is amazing hotel.Please book now.</p>
                    <div className="card-actions justify-between items-center">
                        <div className='flex gap-6'>
                            <p className='flex items-center'>
                                <FaBed></FaBed>
                                : {bed}
                            </p>
                            <p className='flex items-center'>
                                <FaMale></FaMale>
                                <FaFemale></FaFemale>
                                : {person}
                            </p>
                            <p className='flex items-center'>
                                <FaDollarSign></FaDollarSign>
                                : {balance}
                            </p>
                        </div>
                        <button onClick={()=>handleBooking(id)} className="btn btn-primary btn-sm"><Link to={`/book/${id}`}>Book</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;