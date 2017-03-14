import {fromJS} from 'immutable';

import {defaultState, headerSettings} from 'shared/constants/headerSettings';

/**
 * Get initial state from Shopify
 * @returns {*}
 */
export default function getInitialState() {
    let currentSettings;

    try {
        currentSettings = fromJS({
            data: JSON.parse(headerSettings),
            shouldComponentUpdate: false,
        });
    }
    catch (err) {
        console.warn('Data not valid ! The default settings will be used instead '); // eslint-disable-line
        currentSettings = defaultState;
    }

    return currentSettings;
}


