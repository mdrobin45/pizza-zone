import { useEffect, useState } from "react";

const useFetch = () =>
{
    const [pizzas, setPizzas] = useState();

    useEffect(() =>
    {
        fetch('/pizza.JSON')
        .then(res => res.json())
        .then(data => setPizzas(data));
    },[])
    
    
    return {pizzas}
};
export default useFetch;