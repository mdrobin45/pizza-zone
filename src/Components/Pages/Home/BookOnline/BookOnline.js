import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import SectionHeader from '../../../SectionHeader/SectionHeader';
import CallIcon from '../../../../images/online-call.png'
import '../../../CustomStyle/Style.css'
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import DatePicker from 'react-datepicker'

const BookOnline = () =>
{
    const { register, handleSubmit,control } = useForm();
    const onSubmit = data => console.log(data);

    // Select options
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    
    // Form custom style
    const customStyle = {
        control: (provided, state) => ({
            ...provided,
            display: 'flex',
            borderRadius: '5px',
            outline:'none',
            border: state.isFocused ? '2px solid orange' : '2px solid rgb(204 204 204)',
            boxShadow:state.isFocused?'0 0 0 1px #orange':'none'
        }),
        option: (provided, state) => ({
            cursor: 'pointer',
            padding:'10px',
            backgroundColor:state.isFocused?'rgb(255 165 0 / 46%)':'transparent'
        })
    }
    return (
        <div className='flex py-20 items-center container'>
            <div className='w-2/4 pr-4'>
                <SectionHeader
                    title='BOOK ONLINE'
                    subTitle='Fresh From Pizzon'
                    padding='10'
                    isCenter='false'
                />
                <p className='block text-lg w-11/12'>
                Do you have a craving for pizza? Well, if you live in Dhaka, the capital of Bangladesh, sit back and relax because we at foodpanda will satisfy your craving by delivering your delicacy right at your doorstep.
                </p>
                <a className='inline-block' href="tel:01761614500">
                    <button className='bg-black phoneButton text-white flex items-center text-4xl py-4 px-3 border-8 border-primary mt-6'>
                        <img className='pr-4' src={CallIcon} alt="Online Call" />
                        +880176-1614500
                    </button>
                </a>
                
            </div>
            <div className='w-2/4 pl-4'>
                <h2 className='text-4xl pb-6 font-bold text-center'>Book Table</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input className='py-2 px-3 w-full my-2 rounded-md border-2 border-gray-300 outline-none focus:border-primary focus:ring-primary' {...register("name",{required:true})} type='text' placeholder='Name'/>   
                    </div>
                    <div>
                        <input className='py-2 px-3 w-full my-2 rounded-md border-2 border-gray-300 outline-none focus:border-primary focus:ring-primary' {...register("email", { required: true })} placeholder='Email' type='email'/>
                    </div>
                    <div>
                        <Controller
                            name='person'
                            control={control}
                            render={({ field }) => (
                                <Select
                                    className='my-2'
                                    onChange={(optValue) => field.onChange(optValue.value)}
                                    options={options}
                                    selected={field}
                                    styles={customStyle}
                                />
                            )}
                        />
                        <Controller
                            name='bookingDate'
                            control={control}
                            render={({ field }) => (
                                <DatePicker
                                    className='py-2 px-3 w-full my-2 rounded-md border-2 border-gray-300 outline-none focus:border-primary focus:ring-primary'
                                    placeholderText='Select Date'
                                    onChange={(date) =>field.onChange(date)}
                                    selected={(field.value)}
                                    dateFormat='dd/MM/yyyy'
                                />
                            )}
                        />
                    </div>
                    <div>
                        <input className='bg-black block cursor-pointer m-auto mt-6 px-10 py-4 rounded-full text-white text-xl' type="submit" />  
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookOnline;