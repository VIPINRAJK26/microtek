import axiosInstance from "./axios";

export const getPreviewDetails = async () => {
    try {
        const response = await axiosInstance.get("preview_details/");
        return response.data;
    } catch (error) {
        console.error("Error fetching preview details data:", error);
    }
}