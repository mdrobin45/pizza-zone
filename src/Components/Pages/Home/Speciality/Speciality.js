import React from 'react';
import { Link } from 'react-router-dom';
import spaciality1 from '../../../../images/speciality-1.jpg'
import spaciality2 from '../../../../images/speciality-2.jpg'
import spaciality3 from '../../../../images/speciality-3.jpg'
import Button from '../../../Button/Button';
import '../../../CustomStyle/Style.css'
import SectionHeader from '../../../SectionHeader/SectionHeader';

const Speciality = () =>
{
    const speciality = [
        {
            id:1,
            img: spaciality1,
            title:"Mexican Green Wave"
        },
        {
            id:2,
            img: spaciality2,
            title:"Double Cheese Pizza"
        },
        {
            id:3,
            img: spaciality3,
            title:"Margherita Pizza"
        }
    ]
    return (
        <div className='container'>
            <SectionHeader
                padding='16'
                isCenter='true'
                title='OUR SPECIALITY'
                subTitle='Fresh From Pizzon'
            />
            <div className='md:flex item-center text-center'>
                {
                    speciality.map(data => <Link to='/' key={data.id}>
                        <div className='p-6'>
                            <div className='overflow-hidden rounded-full'>
                                <img className='duration-500 specialityImage' src={data.img} alt="Speciality" /> 
                            </div>
                            <h2 className='text-2xl transition hover:text-primary uppercase font-bold pt-3'>{data.title}</h2>
                        </div>
                    </Link>)
                }
            </div>
            <Button isCenter='true' margin='6' btnText='View More' btnUrl='/'/>
        </div>
    );
};

export default Speciality;