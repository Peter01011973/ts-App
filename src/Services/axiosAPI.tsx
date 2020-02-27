import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosAPI = async (url: string, config: AxiosRequestConfig): Promise<{
    response: AxiosResponse<any>;
    success: boolean;
    message: string;
}> => {
    try {
        const response: AxiosResponse<any> = await axios(url, config);
        return {
            response,
            success: true,
            message: response.statusText,
        }
    } catch (error) {
        return {
            response: error.response,
            success: false,
            message: error.message,
        }
    }
};

export  default axiosAPI;