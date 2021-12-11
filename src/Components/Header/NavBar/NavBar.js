import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavBar = () =>
{
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className='container'>
            <nav className='flex justify-between'>
                <h1 className='text-3xl font-bold text-white'>Logo</h1>

                <div className='hidden md:block menu '>
                    <Link className='isActive mx-2 text-white p-3' to='/'>Home</Link>
                    <Link className='mx-2 p-3 text-white' to='/'>About</Link>
                    <Link className='mx-2 p-3 text-white' to='/'>Blog</Link>
                    <Link className='mx-2 p-3 text-white' to='/'>Contact</Link>
                </div>

                <button className={`hamburger block md:hidden ${toggle===true?'isActive':''}`} onClick={()=>setToggle(toggle===false?true:false)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {/* Mobile menu */}
            <nav style={{transform:`${toggle===false?'translateX(100%)':'translateX(0)'}`,transition:'0.4s'}} className='h-full left-1/2 block md:hidden mobileMenu top-14'>
                <div className='menu'>
                    <Link className='isActive block mx-2 text-white p-3' to='/'>Home</Link>
                    <Link className='mx-2 p-3 block text-white' to='/'>About</Link>
                    <Link className='mx-2 p-3 block text-white' to='/'>Blog</Link>
                    <Link className='mx-2 p-3 block text-white' to='/'>Contact</Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;