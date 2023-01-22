import { ref, reactive } from "vue";
import Https from "../plugins/http";

export default class UserService {

    /**
     * 异步获取初始化数据
     * @returns 返回一个异步的Promise对象
     */
    getInitData() {
        return fetch("/api/init.json").then(res => {
            return res.json();
        }).then(d => {
            return d.data;
        });
    }
};