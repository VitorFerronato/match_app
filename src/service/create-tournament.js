import axiosInstance, { API_URL } from "@/configs/axios.js";
import ServiceBase from "@/service/service-base";

export default class CreateTournamentService extends ServiceBase {

    async getPlataforms() {
        return await axiosInstance.get(API_URL + "plataforms");
    }
    async getGames() {
        return await axiosInstance.get(API_URL + "games");
    }
    async getLimitParticipants() {
        return await axiosInstance.get(API_URL + "limit-participant");
    }
    async getFormats() {
        return await axiosInstance.get(API_URL + "formats");
    }
}
