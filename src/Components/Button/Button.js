import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({btnText,btnUrl,margin,isCenter}) => {
    return (
        <div className={`${isCenter==='true'?'text-center':''}`}>
            <Link className={`py-3.5 tracking-wider rounded-full px-10 bg-primary text-white text-lg uppercase inline-block mt-${margin} hover:bg-transparent border-2 border-primary transition-all hover:text-primary`} to={`${btnUrl}`}>{btnText}</Link>
        </div>
    );
};

export default Button;