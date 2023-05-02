import axios from "axios";

export const FetchAPI = axios.create({
    baseURL: 'http://www.omdbapi.com/'
});