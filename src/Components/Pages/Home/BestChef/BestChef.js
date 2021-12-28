import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from '../../../../Hooks/useFetch';
import SectionHeader from '../../../SectionHeader/SectionHeader';
import bestChefTopImage from '../../../../images/menu-top-bg.png'
import bestChefBottomImage from '../../../../images/menu-bottom-bg.png'
import nextArrow from '../../../../images/next.png';
import '../../../CustomStyle/Style.css'

const BestChef = () =>
{
    const { chef } = useFetch();
    const sliderRef = useRef();
    const goToNext = () => {
        sliderRef.current.slickNext();
    }
    const goToPrevious = () => {
        sliderRef.current.slickPrev();
    }
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows:true
                }
            }
        ]
      };
    return (
        <>
            <div className='bg-black w-full'>
                <img src={bestChefTopImage} alt="Top Background" />
            </div>
            <div className='container relative pb-16 bg-black'>
                <SectionHeader
                    title='OUR BEST CHEF'
                    subTitle='Meet our experts'
                    isCenter='true'
                    titleColor='white'
                    padding='10'
                />
                <Slider ref={sliderRef} {...settings}>
                    {
                        chef?.map(person=><SinglePerson key={person.id} person={person}/>)
                    }
                    
                </Slider>
                <img className='nextArrow w-10 hidden md:block' onClick={goToNext} src={nextArrow} alt="NextArrow" />
            <img className='prevArrow w-10 hidden md:block' onClick={goToPrevious} src={nextArrow} alt="NextArrow" />
            </div>
            <div className='bg-black'>
                <img src={bestChefBottomImage} alt="Bottom Background" />
            </div>
        </>
        
    );
};

// Single person card
const SinglePerson = ({person}) =>
{
    const { name, expertOn, image } = person;
    return (
        <div className='text-center pb-3 mx-3 rounded bg-white'>
            <div className='chefImageBox overflow-hidden relative'>
                <img className='m-auto w-full rounded' src={image} alt="Chef" />
            </div>
            <div className='hover:text-primary py-3 transition-all text-center'>
                <h2 className='text-2xl'>{name}</h2>
                <p>{expertOn}</p>
            </div>
            
        </div>
    )
}
export default BestChef;