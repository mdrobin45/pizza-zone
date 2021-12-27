import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../../../Hooks/useFetch';
import SectionHeader from '../../../SectionHeader/SectionHeader';

const LatestNews = () =>
{
    const { news } = useFetch();
    console.log(news);
    return (
        <div className='py-20'>
            <SectionHeader
                title='LATEST NEWS'
                subTitle='Recent Events'
                isCenter='true'
            />
            <div className='container grid grid-cols-3 gap-4'>
                {
                    news?.map(item=><NewsCard key={item.id} item={item}/>)
                }
            </div>
        </div>
        
    );
};

// news card
const NewsCard = ({item}) =>
{
    const { title, publishDate, author, comments, thumbnail } = item;
    return (
        <div>
            <div className='relative'>
                <Link to='/'>
                    <img className='w-full' src={thumbnail} alt="Thumbnail" />
                </Link>
                <div className='-bottom-7 absolute bg-primary h-20 p-1 pt-3 right-10 rounded-full text-center text-white text-xl w-20'>
                    <div >{publishDate.day}</div>
                    <div >{publishDate.month}</div>
                    <span style={{ background: 'rgb(253 157 62 / 50%)',width:'5.5rem',height:'5.5rem'}} className='-right-1 -top-1 absolute block rounded-full'></span>
                </div>
            </div>
            <div className='flex items-center pt-4'>
                <p className='pr-12 text-lg'>by - {author}</p>
                <p className='text-lg'>{comments} comments</p>
            </div>
            <Link to='/'>
                <h2 className='text-2xl my-3 uppercase transition-all hover:text-primary'>{title}</h2>
            </Link>
            <Link className='text-primary text-lg  uppercase underline hover:text-black transition-all' to='/'>Read More</Link>
        </div>
        
    )
}
export default LatestNews;