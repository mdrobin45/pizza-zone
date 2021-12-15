import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavBar = () =>
{
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className='navMain'>
            <div className='container'>
                <nav className='flex justify-between'>
                    <h1 className='text-3xl font-bold text-white'>Logo</h1>

                    <div className='hidden md:block menu '>
                        <Link className='isActive mx-2 text-white p-3' to='/'>Home</Link>
                        <Link className='mx-2 p-3 text-white' to='/about'>About</Link>
                        <Link className='mx-2 p-3 text-white' to='/shop'>Shop</Link>
                        <Link className='mx-2 p-3 text-white' to='/blog'>Blog</Link>
                        {/* <Link className='mx-2 p-3 text-white' to='/contact'>Contact</Link> */}
                    </div>

                    <button className={`hamburger block md:hidden ${toggle===true?'isActive':''}`} onClick={()=>setToggle(toggle===false?true:false)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </div>
            
            {/* Mobile menu */}
            <nav style={{transform:`${toggle===false?'translateX(-100%)':'translateX(0)'}`,transition:'0.4s'}} className='h-full absolute md:hidden mobileMenu'>
                <div className='menu'>
                    <Link onClick={()=>setToggle(toggle===false?true:false)} className='isActive block border-b-2 border-gray-700 text-white p-3' to='/'>Home</Link>
                    <Link onClick={()=>setToggle(toggle===false?true:false)} className='p-3 border-gray-700 border-b-2 block text-white' to='/about'>About</Link>
                    <Link onClick={()=>setToggle(toggle===false?true:false)} className='p-3 border-gray-700 border-b-2 block text-white' to='/shop'>Shop</Link>
                    <Link onClick={()=>setToggle(toggle===false?true:false)} className='p-3 border-gray-700 border-b-2 block text-white' to='/blog'>Blog</Link>
                    <Link onClick={()=>setToggle(toggle===false?true:false)} className='p-3 border-gray-700 border-b-2 block text-white' to='/contact'>Contact</Link>
                </div>
            </nav>
        </div>
        
    );
};

export default NavBar;