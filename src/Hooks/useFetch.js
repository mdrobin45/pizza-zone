import { useEffect, useState } from "react";

const useFetch = () =>
{
    const [pizzas, setPizzas] = useState([]);
    const [chef, setChef] = useState([]);

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
    },[])
    
    return {pizzas,chef}
};
export default useFetch;