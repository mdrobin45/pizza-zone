import React from 'react';
import useFetch from '../../../../Hooks/useFetch';

const Testimonial = () =>
{
    const { testimonial } = useFetch();
    console.log(testimonial);
    return (
        <div>
            <div>
                {
                    testimonial?.map(item=><SingleTestimonial key={item.id} item={item}/>)
                }
            </div>
        </div>
    );
};


// Single Testimonial
const SingleTestimonial = ({item}) =>
{
    const { customerName, customerTitle, customerImage, quote } = item;
    return (
        <div>
            <div>
                <img src={customerImage} alt="Customer Profile" />
                <h2>{customerName}</h2>
            </div>
            <div>
                <p>{quote}</p>
                <p className='text-primary'><span className='text-lg'>{customerName}</span> - {customerTitle}</p>
            </div>
        </div>
    )
}
export default Testimonial;