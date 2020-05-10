import { currentConstants } from '../constants';
import { currentService } from '../services/current';

function getCurrent(city) {
    function request() { return { type: currentConstants.CURRENT_REQUEST } }
    function success(current) { return { type: currentConstants.CURRENT_SUCCESS, current } }
    function failure(error) { return { type: currentConstants.CURRENT_FAILURE, error } }

    return function (dispatch) {
        dispatch(request());
        return currentService.GetCurrent(city).then(current => {
            dispatch(success(current.data));
        }).catch(err => {
            dispatch(failure(err.message));
        });
    };
}

export const currentActions = {
    getCurrent
};
