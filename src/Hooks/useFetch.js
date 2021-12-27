import { useEffect, useState } from "react";

const useFetch = () =>
{
    const [pizzas, setPizzas] = useState([]);
    const [chef, setChef] = useState([]);
    const [news, setNews] = useState([]);
    const [testimonial, setTestimonial] = useState([]);

    // Fetch all pizzas
    useEffect(() =>
    {
        fetch('/pizza.JSON')
        .then(res => res.json())
        .then(data => setPizzas(data));
    },[])
    

    // Fetch best chef
    useEffect(() =>
    {
        fetch('/chef.JSON')
            .then(res => res.json())
            .then(data => setChef(data));
    }, [])
    
    // Fetch latest news
    useEffect(() =>
    {
        fetch('/LatestNews.JSON')
            .then(res => res.json())
            .then(data => setNews(data));
    }, [])

    // Fetch testimonial
    useEffect(() =>
    {
        fetch('/CustomerTestimonial.JSON')
            .then(res => res.json())
            .then(data => setTestimonial(data));
    },[])
    
    return {pizzas,chef,news,testimonial}
};
export default useFetch;