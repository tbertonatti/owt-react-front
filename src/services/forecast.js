import { HttpGet } from './http';
const GetForecast = (city = "") => {
    return HttpGet(`/forecast/${city}`)
};
export const forecastService = {
    GetForecast
};
