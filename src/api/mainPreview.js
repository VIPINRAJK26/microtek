import axiosInstance from "./axios";

export const getMainPreview = async () => {
    try {
        const response = await axiosInstance.get("main_preview/");
        return response.data;
    } catch (error) {
        console.error("Error fetching main preview data:", error);
    } 
}