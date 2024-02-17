import axiosInstance, { API_URL } from "@/configs/axios.js";
import ServiceBase from "@/service/service-base";

export default class TournamentService extends ServiceBase {

    async getTournaments() {
        return await axiosInstance.get(API_URL + "tournament");
    }

    async getTournamentById(id) {
        console.log(id);
        return await axiosInstance.get(API_URL + `tournament/${id}`);
    }
}
