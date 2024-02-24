import axiosInstance, { API_URL } from "@/configs/axios.js";
import ServiceBase from "@/service/service-base";

export default class TournamentService extends ServiceBase {

    async getTournaments() {
        return await axiosInstance.get(API_URL + "tournaments");
    }

    async getTournamentById(id) {
        return await axiosInstance.get(API_URL + `tournaments/${id}`);
    }
}
