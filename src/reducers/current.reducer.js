import { currentConstants } from '../constants';
const initialState = { loading: false, current: null, error: null };

export function current(state = initialState, action) {
  switch (action.type) {
    case currentConstants.CURRENT_REQUEST:
      return {
        loading: true,
        current: null,
        error: null
      };
    case currentConstants.CURRENT_SUCCESS:
      return {
        loading: false,
        current: action.current
      };
    case currentConstants.CURRENT_FAILURE:
      return {
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}