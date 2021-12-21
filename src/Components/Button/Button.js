import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({btnText,btnUrl,margin,isCenter}) => {
    return (
        <div className={`${isCenter==='true'?'text-center':''}`}>
            <Link className={`py-4 tracking-wider rounded-full px-10 bg-primary text-white text-lg uppercase inline-block mt-${margin}`} to={`${btnUrl}`}>{btnText}</Link>
        </div>
    );
};

export default Button;