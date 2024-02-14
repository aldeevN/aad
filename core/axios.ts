import axios from "axios";

export const API_URL = "https://force-in-systems.tools.webtronics.ru/";

export const $api = axios.create({
    baseURL: API_URL,
});

export default $api;
