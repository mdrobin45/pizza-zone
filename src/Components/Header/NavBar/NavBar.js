import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../../images/footer-logo.png'

const NavBar = () =>
{
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className='navMain'>
            <div className='container'>
                <nav className='flex justify-between'>
                    <Link to='/'>
                        <img src={logo} alt="Logo" />
                    </Link>
                    

                    <div className='hidden md:block menu '>
                        <Link className='isActive mx-2 text-white p-3' to='/'>Home</Link>
                        <Link className='mx-2 p-3 text-white' to='/about'>About</Link>
                        <Link className='mx-2 p-3 text-white' to='/shop'>Shop</Link>
                        <Link className='mx-2 p-3 text-white' to='/blog'>Blog</Link>
                        <Link className='mx-2 p-3 text-white' to='/contact'>Contact</Link>
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
                    <Link onClick={()=>setToggle(toggle===false?true:false)} className='isActive block border-b-2 border-white text-white p-3' to='/'>Home</Link>
                    <Link onClick={()=>setToggle(toggle===false?true:false)} className='p-3 border-white border-b-2 block text-white' to='/about'>About</Link>
                    <Link onClick={()=>setToggle(toggle===false?true:false)} className='p-3 border-white border-b-2 block text-white' to='/shop'>Shop</Link>
                    <Link onClick={()=>setToggle(toggle===false?true:false)} className='p-3 border-white border-b-2 block text-white' to='/blog'>Blog</Link>
                    <Link onClick={()=>setToggle(toggle===false?true:false)} className='p-3 border-white border-b-2 block text-white' to='/contact'>Contact</Link>
                </div>
            </nav>
        </div>
        
    );
};

export default NavBar;