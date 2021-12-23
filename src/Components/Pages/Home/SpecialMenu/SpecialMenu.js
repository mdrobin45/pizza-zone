import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../CustomStyle/Style.css'
import SectionHeader from '../../../SectionHeader/SectionHeader';
import menuBottomBg from '../../../../images/menu-bottom-bg.png'
import menuTopBg from '../../../../images/menu-top-bg.png'
import useFetch from '../../../../Hooks/useFetch';

const SpecialMenu = () =>
{
    const [isActive, setIsActive] = useState(0);
    const [tabItems, setTabItems] = useState('all');
    const { pizzas } = useFetch();
    const selectedItem=pizzas?.filter(pizza=>pizza.category===tabItems)

    console.log(selectedItem);
    return (
        <div className='mt-10'>
            <div className='bg-black w-full'>
                <img src={menuTopBg} alt="Top Background" />
            </div>
            <div className='bg-black py-20 container'>
                <SectionHeader
                    title="OUR SPECIAL MENU"
                    titleColor="white"
                    subTitle="Fresh From Pizzon"
                    isCenter="true"
                />
                <div className='text-center mt-10'>
                    <span className='bg-gray-700 inline-block rounded-full relative'>
                        <button onClick={()=>{setIsActive(0);setTabItems('all')}} className={`uppercase z-10 text-white px-6 py-3 mr-3 rounded-full ${isActive===0?'bg-primary transition-all':''}`}>ALL</button>
                        <button onClick={()=>{setIsActive(1);setTabItems('drink')}} className={`uppercase z-10 text-white px-6 py-3 mx-3 rounded-full ${isActive===1?'bg-primary transition-all':''}`}>DRINKS</button>
                        <button onClick={()=>{setIsActive(2);setTabItems('salad')}} className={`uppercase z-10 text-white px-6 py-3 mx-3 rounded-full ${isActive===2?'bg-primary transition-all':''}`}>SALADS</button>
                        <button onClick={()=>{setIsActive(3);setTabItems('pasta')}} className={`uppercase z-10 text-white px-6 py-3 mx-3 rounded-full ${isActive===3?'bg-primary transition-all':''}`}>PASTA</button>
                        <button onClick={()=>{setIsActive(4);setTabItems('burger')}} className={`uppercase z-10 text-white px-6 py-3 mx-3 rounded-full ${isActive===4?'bg-primary transition-all':''}`}>BURGERS</button>
                        <button onClick={()=>{setIsActive(5);setTabItems('desert')}} className={`uppercase z-10 text-white px-6 py-3 mx-3 rounded-full ${isActive===5?'bg-primary transition-all':''}`}>DESERTS</button>
                        <button onClick={()=>{setIsActive(6);setTabItems('pizza')}} className={`uppercase z-10 text-white px-6 py-3 ml-3 rounded-full ${isActive===6?'bg-primary transition-all':''}`}>PIZZAS</button>
                    </span>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        tabItems !== 'all' ? selectedItem?.map(pizza =><SinglePizza key={pizza.id} pizza={pizza}/>) : pizzas?.map(pizza =><SinglePizza key={pizza.id} pizza={pizza}/>) 
                    }
                </div>
                
            </div>
            <div className='bg-black'>
                <img src={menuBottomBg} alt="Bottom Background" />
            </div>
        </div>
    );
};

// Single Pizza
const SinglePizza = ({pizza}) =>
{
    const { image, name, description, price, } = pizza;
    return (
        <div className='text-white text-center py-10'>
            <Link className='pizzaImage block' to='/shop'>
                <img className='w-2/3 m-auto' src={image} alt="Pizza" />
            </Link>
            <Link to='/shop'>
                <h2 className='text-2xl pt-3 tracking-wider hover:text-primary transition-all'>{name}</h2>
            </Link>
            <p className='text-lg py-3'>{description.shortDescription}</p>
            <h2 className='text-2xl text-primary'>${price.sellPrice}</h2>
        </div>
    )
}
export default SpecialMenu;