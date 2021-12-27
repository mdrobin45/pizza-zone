import React from 'react';
import useFetch from '../../../../Hooks/useFetch';

const LatestNews = () =>
{
    const { news } = useFetch();
    console.log(news);
    return (
        <div>
            
        </div>
    );
};

export default LatestNews;