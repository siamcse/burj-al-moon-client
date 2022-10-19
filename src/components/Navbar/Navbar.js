import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const signOut=()=>{
        logOut();
    }
    return (
        <div>
            <div className="navbar bg-base-300">
                <div className='mx-auto'>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>Book</Link></li>
                            {
                                user?.email ?
                                    <button onClick={signOut}>Log Out</button>
                                    :
                                    <>
                                        <li><Link to='/login'>Login</Link></li>
                                        <li><Link to='/signup'>Sign Up</Link></li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;