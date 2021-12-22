import React,{useState} from 'react';
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
            <div className='py-20'>
                <SectionHeader
                    title="OUR SPECIAL MENU"
                    // titleColor="white"
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
                {
                    tabItems !== 'all' ? selectedItem?.map(pizza => <div>
                       <h2>{pizza?.name}</h2>
                    </div>) : pizzas?.map(pizza => <div>
                       <h2>{pizza?.name}</h2>
                   </div>) 
                }
            </div>
            <div className='bg-black'>
                <img src={menuBottomBg} alt="Bottom Background" />
            </div>
        </div>
    );
};

export default SpecialMenu;