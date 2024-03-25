import axios from "axios";

const API_URL = "https://www.campzin.com/"

var axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'api_key': '123',
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

var axiosRaw = axios.create({
    baseURL: API_URL,
});

export { axiosRaw, API_URL, };

export default axiosInstance;