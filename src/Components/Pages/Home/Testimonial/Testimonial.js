import React from 'react';
import useFetch from '../../../../Hooks/useFetch';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import customerTopBg from '../../../../images/customer-top-bg.png'
import customerBottomBg from '../../../../images/customer-bottom-bg.png'
import SectionHeader from '../../../SectionHeader/SectionHeader';
import '../../../CustomStyle/Style.css'

const Testimonial = () =>
{
    const { testimonial } = useFetch();
    
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        arrows:false
      };
    return (
        <div className='bg-black'>
            <div className='bg-black w-full'>
                <img src={customerTopBg} alt="Top Background" />
            </div>
            <SectionHeader
                title='CUSTOMER REVIEWS'
                subTitle='What Say Our Clients'
                isCenter='true'
                titleColor='white'
                padding='8'
            />
            <div className='container pb-12'>
                <Slider {...settings}>
                    {
                        testimonial?.map(item=><SingleTestimonial key={item.id} item={item}/>)
                    }
                </Slider> 
            </div>
            <div className='bg-black w-full'>
                <img src={customerBottomBg} alt="Top Background" />
            </div>
        </div>
    );
};


// Single Testimonial
const SingleTestimonial = ({item}) =>
{
    const { customerName, customerTitle, customerImage, quote } = item;
    return (
        <div className='text-white md:flex items-center'>
            <div className='md:w-1/4 text-center md:pr-10'>
                <img className='m-auto' src={customerImage} alt="Customer Profile" />
                <h2 className='text-2xl pt-3'>{customerName}</h2>
            </div>
            <div className='bg-white mt-6 md:mt-0 rounded relative px-3 py-6 text-black customerQuote'>
                <p className='text-lg text-gray-600'>{quote}</p>
                <p className='text-primary'><span className='text-lg'>{customerName}</span> - {customerTitle}</p>
            </div>
        </div>
    )
}
export default Testimonial;