import React from 'react';

const SectionHeader = ({ title, subTitle, titleColor, isCenter, padding }) =>
{
    return (
        <div className={`py-${padding} ${isCenter === 'true' ? 'text-center' : 'text-left'}`}>
            <h3 className='text-primary text-3xl font-secondary'>{subTitle}</h3>
            <h2 className={`text-6xl font-bold text-${titleColor}`}>{title}</h2>
        </div>
    );
};

export default SectionHeader;