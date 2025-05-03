import { getHeroCarousel } from "../api/heroCarousel";
import { useEffect, useState } from "react";

const useHeroCarousel = () => {
    const [hero,setHero] =useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        getHeroCarousel()
        .then(setHero)
        .catch((err) => {
            setError(err);
        }).finally(() =>{
            setLoading(false);
        })
    },[])

    return {hero,loading, error};
}

export default useHeroCarousel