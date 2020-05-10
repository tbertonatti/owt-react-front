import { forecastConstants } from '../constants';
import { forecastService } from '../services/forecast';

function getForecast(city) {
    function request() { return { type: forecastConstants.FORECAST_REQUEST } }
    function success(forecast) { return { type: forecastConstants.FORECAST_SUCCESS, forecast } }
    function failure(error) { return { type: forecastConstants.FORECAST_FAILURE, error } }

    return function (dispatch) {
        dispatch(request());
        return forecastService.GetForecast(city).then(forecast => {
            dispatch(success(forecast.data));
        }).catch(err => {
            dispatch(failure(err.message));
        });
    };
}

export const forecastActions = {
    getForecast
};
