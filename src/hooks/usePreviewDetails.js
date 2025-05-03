import { getPreviewDetails } from "../api/previewDetails";
import { useEffect, useState } from "react";

const usePreviewDetails = () => {
    const [previewDetails, setPreviewDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        getPreviewDetails()
        .then(setPreviewDetails)
        .catch((err)=>{
            setError(err);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[]);

    return {previewDetails,loading, error};
}

export default usePreviewDetails;
