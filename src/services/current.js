import { HttpGet } from './http';
const GetCurrent = (city = "") => {
    return HttpGet(`/current/${city}`)
};
export const currentService = {
    GetCurrent
};
