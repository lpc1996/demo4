import axiosInstance from "./axios-util.js";
import qs from 'qs';

// json格式请求头
const headerJSON = {
    "Content-Type": "application/json",
};
// FormData格式请求头
const headerFormData = {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
};

const http = {
    /**
     * methods: 请求
     * @param url 请求地址
     * @param params 请求参数
     * @param json 判断数据发送是否是json格式
     */
    get(url, params,json) {
        const config = {
            method: "get",
            url: url,
            headers: headerJSON
        };
        if (params) config.params = params;
        return axiosInstance(config);
    },
    post(url, params,json) {
        const config = {
            method: "post",
            url: url,
            headers: json ? headerJSON : headerFormData
        };
        if (params) config.data = json?params: qs.stringify(params);

        return axiosInstance(config);
    },
    put(url, params,json) {
        const config = {
            method: "put",
            url: url,
            headers: headerFormData
        };
        if (params) config.params = params;
        return axiosInstance(config);
    },
    delete(url, params,json) {
        const config = {
            method: "delete",
            url: url,
            headers: headerFormData
        };
        if (params) config.params = params;
        return axiosInstance(config);
    },
};

//导出
export default http;