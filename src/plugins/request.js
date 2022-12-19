import axios from 'axios';

//对axios进行封装
export function request(config){
    
    //axios实例配置
    const instance = axios.create({
        baseURL:import.meta.env.VITE_SERVER_URL,
        timeout:5000,

    })
}