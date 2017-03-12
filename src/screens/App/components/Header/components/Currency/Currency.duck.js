import {fromJS} from 'immutable';
import axios from 'axios';

export const defaultState = fromJS({
    data: {},
    hasError: false,
    isLoading: false,
});

const CURRENCY_HAS_ERROR = 'CURRENCY_HAS_ERROR';
const CURRENCY_IS_LOADING = 'CURRENCY_IS_LOADING';
const CURRENCY_FETCH_DATA_SUCCESS = 'CURRENCY_FETCH_DATA_SUCCESS';

// Reducer
export default (state = defaultState, action) => {
    switch (action.type) {
        case CURRENCY_HAS_ERROR: {
            const {hasError} = action;
            return state.set('hasError', hasError);
        }

        case CURRENCY_IS_LOADING: {
            const {isLoading} = action;
            return state.set('isLoading', isLoading);
        }

        case CURRENCY_FETCH_DATA_SUCCESS: {
            const {items} = action;
            return state.set('isLoading', false).set('data', items);
        }

        default: {
            return state;
        }
    }
};

// Action Creators
export function itemsHasErrored(hasError) {
    return {
        type: CURRENCY_HAS_ERROR,
        hasError,
    };
}

export function itemsIsLoading(isLoading) {
    return {
        type: CURRENCY_IS_LOADING,
        isLoading,
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: CURRENCY_FETCH_DATA_SUCCESS,
        items,
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        axios.get(url)
            .then(response => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response.data;
            })
            .then(items => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
