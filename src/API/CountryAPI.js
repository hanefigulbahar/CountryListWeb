import axios from "axios";
const baseURL = axios.create({
    baseURL: 'https://restcountries.com/v2'
});

export const CountryAPI = {
    getAll: async function () {
         return await baseURL.request({
            method: "GET",
            url: `/all`
        });
    },
    getCapital:async function (capital) {
        return await baseURL.request({
            method:"GET",
            url: `/capital/${capital}`
        })
    }
}