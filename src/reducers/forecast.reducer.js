import { forecastConstants } from '../constants';
const initialState = { loading: false, forecast: null, error: null };

export function forecast(state = initialState, action) {
  switch (action.type) {
    case forecastConstants.FORECAST_REQUEST:
      return {
        loading: true,
        error: null,
        forecast: null
      };
    case forecastConstants.FORECAST_SUCCESS:
      return {
        loading: false,
        forecast: action.forecast
      };
    case forecastConstants.FORECAST_FAILURE:
      return {
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}