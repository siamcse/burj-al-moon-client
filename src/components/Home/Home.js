import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import Header from '../Header/Header';
import Hotel from '../Hotel/Hotel';

const Home = () => {
    const {hotels} = useContext(AuthContext);
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-3 mt-12 gap-6 mx-12'>
                
                {
                    hotels.map(hotel=> <Hotel 
                        key={hotel.id}
                        hotel={hotel}
                    ></Hotel>)
                }
            </div>
        </div>
    );
};

export default Home;