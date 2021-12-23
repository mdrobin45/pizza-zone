import React from 'react';
import { useForm } from "react-hook-form";
import SectionHeader from '../../../SectionHeader/SectionHeader';
import CallIcon from '../../../../images/online-call.png'
import '../../../CustomStyle/Style.css'

const BookOnline = () =>
{
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex container'>
            <div className='w-2/4'>
                <SectionHeader
                    title='BOOK ONLINE'
                    subTitle='Fresh From Pizzon'
                    padding='10'
                    isCenter='false'
                />
                <p className='text-lg'>
                Do you have a craving for pizza? Well, if you live in Dhaka, the capital of Bangladesh, sit back and relax because we at foodpanda will satisfy your craving by delivering your delicacy right at your doorstep.
                </p>
                <a href="tel:01761614500">
                    <button className='bg-black phoneButton text-white flex items-center text-4xl py-4 px-3 border-8 border-primary mt-6'>
                        <img className='pr-4' src={CallIcon} alt="Online Call" />
                        +880176-1614500
                    </button>
                </a>
                
            </div>
            <div className='w-2/4'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",{required:true})} type='text' placeholder='Name'/>
                <input {...register("email", { required: true })} placeholder='Email' type='email'/>
                <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default BookOnline;