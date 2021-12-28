import React from 'react';
import Button from '../../../Button/Button';
import SectionHeader from '../../../SectionHeader/SectionHeader';
import aboutPizzaImg from '../../../../images/about-pizzon.png'

const AboutPizzon = () =>
{
    return (
        <div className='container mt-6 md:mt-0 md:flex items-center justify-between'>
            <div className='md:w-1/2'>
                <SectionHeader
                    title='ABOUT PIZZON'
                    subTitle='Delicious Restaurant'
                />
                <p className='py-4 text-lg'>If you are hungry, or just want to satisfy your appetite for a pizza but don’t know where to find it in Dhaka, worry no more. If pizza near me are the wordfs ringing in your mind, foodpanda will come to your aid. Food panda covers many restaurants in the city and has delivery services any hour of the day or night. You can visit Shawarma Street, Roll Xpress Café, Coffeelicious Coffee-Baily Road and La Forchetta for the tastiest of the pizzas. You can locate your delicacies at Bitter Sweet Café, Sbarro and Razzle.</p>
                <Button btnText='View More' btnUrl='/'/>
            </div>
            <div>
                <img className='md:-mt-24 mt-10' src={aboutPizzaImg} alt="About Pizza Thumbnail" />
            </div>
        </div>
    );
};

export default AboutPizzon;