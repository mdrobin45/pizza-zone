import React from 'react';
import step1Image from '../../../../images/order-1.svg'
import step2Image from '../../../../images/order-2.svg'
import step3Image from '../../../../images/order-3.svg'
import orderStepTopBg from '../../../../images/order-top.png'
import orderStepBottomBg from '../../../../images/order-bottom.png'

const OrderStep = () =>
{
    const stepDetails = {
        title1: "ORDER YOUR FOOD",
        title2: "DELIVERY OR PICK UP",
        title3:"DELICIOUS RECEIPE",
        step1: "Just confirm your order and enjoy our fastest delivery. Fresh and delicious pizza will be delivered to your doorstep.",
        step2: "Get your food delivered in less than an hour! That’s as fast as it can get.",
        step3:"Find your favourite among the thousands of restaurants in our app."
    }
    return (
        <div>
            <div className='bg-black -m-1.5 w-full'>
                <img src={orderStepTopBg} alt="Top" />
            </div>
            <div className='md:flex bg-primary py-20 items-center container text-center'>
                <SingleStep
                    img={step1Image}
                    title={stepDetails.title1}
                    details={stepDetails.step1}
                />
                <SingleStep
                    img={step2Image}
                    title={stepDetails.title2}
                    details={stepDetails.step2}
                />
                <SingleStep
                    img={step3Image}
                    title={stepDetails.title3}
                    details={stepDetails.step3}
                />
            </div>
            <div className='w-full'>
                <img src={orderStepBottomBg} alt="Top" />
            </div>
        </div>
    );
};

const SingleStep = (stepData) =>
{
    const { img, title, details } = stepData;
    return (
        <div className='w-full md:w-1/3 px-6 mt-10 md:mt-0'>
            <img className='w-1/3 m-auto' src={img} alt="Step" />
            <h2 className='text-3xl tracking-wide pt-3 font-bold'>{title}</h2>
            <p className='text-lg pt-3'>{details}</p>
        </div>
    )
}
export default OrderStep;