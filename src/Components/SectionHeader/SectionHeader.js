import React from 'react';

const SectionHeader = ({title,subTitle,titleColor,isCenter,padding}) => {
    return (
        <div className={`p-${padding} ${isCenter==='true'?'text-center':''}`}>
            <h3 className='text-primary text-3xl font-secondary'>{subTitle}</h3>
            <h2 className={`text-6xl ${titleColor}`}>{title}</h2>
        </div>
    );
};

export default SectionHeader;