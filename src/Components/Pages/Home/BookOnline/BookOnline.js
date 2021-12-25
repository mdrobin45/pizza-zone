import React from 'react';
import { Controller, useForm } from "react-hook-form";
import SectionHeader from '../../../SectionHeader/SectionHeader';
import CallIcon from '../../../../images/online-call.png'
import '../../../CustomStyle/Style.css'
import Select from 'react-select'

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
            // backgroundColor:state.isSelected?'orange':'transparent',
            backgroundColor:state.isFocused?'rgb(255 165 0 / 46%)':'transparent'
        })
    }
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
                <div>
                    <input {...register("name",{required:true})} type='text' placeholder='Name'/>   
                </div>
                <div>
                    <input {...register("email", { required: true })} placeholder='Email' type='email'/>
                </div>
                <div>
                    <Controller
                        name='person'
                        control={control}
                        render={({ field }) => (
                            <Select
                                onChange={(optValue) => field.onChange(optValue.value)}
                                options={options}
                                selected={field}
                                styles={customStyle}
                            />
                        )}
                    /> 
                </div>
                <div>
                    <input type="submit" />  
                </div>
            </form>
            </div>
        </div>
    );
};

export default BookOnline;