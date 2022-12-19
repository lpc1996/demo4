import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_SERVER_URL,
    timeout:1000*5
});

//添加请求拦截器
axiosInstance.interceptors.request.use(function(config){
    return config;
},function (error){
    return Promise.reject(error);
});

//添加响应拦截器
axiosInstance.interceptors.response.use(function (response){
    return response;
},function (error){
    return Promise.reject(error);
});

export default axiosInstance