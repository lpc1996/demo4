import { ref, reactive } from "vue";
import Https from "../plugins/http";

export default class UserService {
    getInitData() {
        return fetch("/api/init.json").then(res => {
            return res.json();
        }).then(d => {
            return d.data;
        });
    }
};