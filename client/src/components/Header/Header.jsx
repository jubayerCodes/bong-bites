import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { Tooltip } from 'react-tooltip'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {

    const [toggle, setToggle] = useState(false)

    const { user, logOut, loading } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }

    return (
        <header className='header py-3'>
            <div className="my-container navbar grid grid-cols-1 xl:grid-cols-3 justify-between p-0">
                <div className="navbar-start flex justify-between w-full">
                    <div className="site-title">
                        <Link to="/" className="normal-case text-3xl text-white">Bong Bites</Link>
                    </div>
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={() => setToggle(!toggle)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                </div>
                {
                    toggle ?
                        <div className="offcanvas-content z-[100] absolute top-20 left-0 bg-[#101418] text-white rounded-none w-full flex xl:hidden flex-col items-start gap-5 p-2">
                            <ul tabIndex={0} className="menu w-full menu-compact dropdown-content mt-3 p-0 shadow">

                                <li><ActiveLink to='/'>Home</ActiveLink></li>
                                <li><ActiveLink to='/about'>About</ActiveLink></li>
                                <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                            </ul>
                            {
                                user ?
                                    <div className="navbar-end w-full flex justify-between gap-3 p-5">

                                        {
                                            user.photoURL ?
                                                <a data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}>
                                                    <img src={user.photoURL} alt="photo" className='cursor-pointer text-white w-[50px] h-[50px] rounded-full' />
                                                </a>
                                                :
                                                <FaRegUserCircle fontSize={'45px'} className='mr-4 cursor-pointer' color='white' />
                                        }

                                        <button className="btn header-btn" onClick={handleLogOut}>Log Out</button>
                                    </div>
                                    :
                                    <div className="navbar-end w-full flex justify-between gap-3 p-5">
                                        <FaRegUserCircle fontSize={'45px'} className='mr-4 cursor-pointer' color='white' />
                                        <Link to="/login" className="btn header-btn">Login</Link>
                                    </div>
                            }
                        </div>
                        :
                        <></>
                }
                <div className="navbar-center hidden xl:flex justify-center">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><ActiveLink to='/'>Home</ActiveLink></li>
                        <li><ActiveLink to='/about'>About</ActiveLink></li>
                        <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                    </ul>
                </div>

                {
                    user ?
                        <div className="navbar-end hidden w-full xl:flex justify-end gap-3">

                            {
                                user.photoURL ?
                                    <a data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}>
                                        <img src={user.photoURL} alt="photo" className='cursor-pointer text-white w-[50px] h-[50px] rounded-full' />
                                    </a>
                                    :
                                    <FaRegUserCircle fontSize={'45px'} className='mr-4 cursor-pointer' color='white' />
                            }

                            <button className="btn header-btn" onClick={handleLogOut}>Log Out</button>
                        </div>
                        :
                        <div className="navbar-end hidden w-full xl:flex justify-end">
                            <FaRegUserCircle fontSize={'45px'} className='mr-4 cursor-pointer' color='white' />
                            <Link to="/login" className="btn header-btn">Login</Link>
                        </div>
                }
                <Tooltip id="my-tooltip" />
            </div>
        </header>
    );
};

export default Header;