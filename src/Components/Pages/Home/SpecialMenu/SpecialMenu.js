import React from 'react';
import SectionHeader from '../../../SectionHeader/SectionHeader';
import menuBottomBg from '../../../../images/menu-bottom-bg.png'
import menuTopBg from '../../../../images/menu-top-bg.png'

const SpecialMenu = () => {
    return (
        <div className='mt-10'>
            <div className='bg-black w-full'>
                <img src={menuTopBg} alt="Top Background" />
            </div>
            <div className='bg-black py-20'>
                <SectionHeader
                    title="OUR SPECIAL MENU"
                    titleColor="white"
                    subTitle="Fresh From Pizzon"
                    isCenter="true"
                />
            </div>
            <div className='bg-black'>
                <img src={menuBottomBg} alt="Bottom Background" />
            </div>
        </div>
    );
};

export default SpecialMenu;