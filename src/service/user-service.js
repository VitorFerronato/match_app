import axiosInstance, { API_URL } from "@/configs/axios.js";
import ServiceBase from "@/service/service-base";

export default class TournamentService extends ServiceBase {

    async login(request) {
        /**
         * @param {string} email
         * @param {string} password
         */
        return await axiosInstance.post(API_URL + "login", request, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async register(request) {
        /**
         * @param {string} password
         * @param {string} email
         * @param {string} full_name
         * @param {string} nickname
         */
        return await axiosInstance.post(API_URL + "register", request);
    }
}
