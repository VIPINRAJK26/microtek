import axiosInstance from "./axios";

export const getHeroCarousel = async () => {
    try{
        const response = await axiosInstance.get("hero_carousel/");
        return response.data;
    }catch(error){
        console.error("Error fetching hero carousel data:", error);
    }
}