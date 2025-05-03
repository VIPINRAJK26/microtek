import { getMainPreview } from "../api/mainPreview";
import { useEffect, useState } from "react";

const useMainPreview = () => {
    const [mainPreview, setMainPreview] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() =>{
        getMainPreview()
        .then(setMainPreview)
        .catch((err)=>{
            setError(err);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[]);

    return {mainPreview,loading, error};
}

export default useMainPreview