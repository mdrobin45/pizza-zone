import React, { useRef } from 'react';
import Slider from "react-slick";
import '../../../CustomStyle/Style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pizza1 from '../../../../images/pizza-1.png';
import pizza2 from '../../../../images/pizza-2.png';
import pizza3 from '../../../../images/pizza-3.png';
import pizza4 from '../../../../images/pizza-4.png';
import pizza5 from '../../../../images/pizza-5.png';
import pizza6 from '../../../../images/pizza-6.png';
import pizza7 from '../../../../images/pizza-7.png';
import nextArrow from '../../../../images/next.png';


const HomeBanner = () =>
{
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
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false
    };
    return (
        <div>
            <Slider ref={sliderRef} {...settings}>

                {/* Slide-1 */}
                <div>
                    <div className='bg-black flex flex-col-reverse justify-around md:flex-row py-20'>
                        <div className='relative'>
                            <img className='pizza1 w-10/12 md:w-full m-auto animate-spin-slow' src={pizza1} alt="Pizza" />
                            <img className='pizza2 absolute' src={pizza2} alt="Pizza" />
                            <img className='pizza3 absolute w-1/4 md:w-1/3' src={pizza3} alt="Pizza" />
                            <img className='pizza4 absolute invisible md:visible' src={pizza4} alt="Pizza" />
                            <img className='pizza5 absolute w-1/4 md:w-1/3' src={pizza5} alt="Pizza" />
                            <img className='pizza6 absolute w-1/3 md:w-1/3' src={pizza6} alt="Pizza" />
                            <img className='pizza7 absolute invisible md:visible' src={pizza7} alt="Pizza" />
                        </div>
                        <div>
                            <h1 className='text-6xl text-center md:text-left md:text-9xl font-bold uppercase text-white'>Quality <span className='visible md:hidden'>F<span className='text-primary'>oo</span>ds</span></h1>
                            <h1 className='text-4xl hidden md:block text-center md:text-left md:text-9xl font-bold uppercase text-white pt-6'>F<span className='text-primary'>oo</span>ds</h1>
                            <p className='text-3xl text-center md:text-left tracking-widest pt-6 text-primary'>Healthy Food For Healthy <br className='hidden md:visible'/> Body</p>
                        </div>
                    </div>
                </div>

                {/* Slide-2 */}
                <div>
                    <div className='md:flex bg-black py-20 justify-around'>
                        <div>
                            <h1 className='text-6xl text-center md:text-left md:text-9xl font-bold uppercase text-white'>Quality <span className='visible md:hidden'>F<span className='text-primary'>oo</span>ds</span></h1>
                            <h1 className='text-4xl hidden md:block text-center md:text-left md:text-9xl font-bold uppercase text-white pt-6'>F<span className='text-primary'>oo</span>ds</h1>
                            <p className='text-3xl text-center md:text-left tracking-widest pt-6 text-primary'>Healthy Food For Healthy <br className='hidden md:visible'/> Body</p>
                        </div>
                        <div className='relative'>
                            <img className='pizza1 w-10/12 md:w-full m-auto animate-spin-slow' src={pizza1} alt="Pizza" />
                            <img className='pizza2 absolute' src={pizza2} alt="Pizza" />
                            <img className='pizza3 absolute w-1/4 md:w-1/3' src={pizza3} alt="Pizza" />
                            <img className='pizza4 absolute invisible md:visible' src={pizza4} alt="Pizza" />
                            <img className='pizza5 absolute w-1/4 md:w-1/3' src={pizza5} alt="Pizza" />
                            <img className='pizza6 absolute w-1/3 md:w-1/3' src={pizza6} alt="Pizza" />
                            <img className='pizza7 absolute invisible md:visible' src={pizza7} alt="Pizza" />
                        </div>
                    </div>
                </div>
            </Slider>
            <img className='nextArrow w-10 hidden md:block' onClick={goToNext} src={nextArrow} alt="NextArrow" />
            <img className='prevArrow w-10 hidden md:block' onClick={goToPrevious} src={nextArrow} alt="NextArrow" />
        </div>
    );
};

export default HomeBanner;