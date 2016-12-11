import {fromJS} from 'immutable';

import {defaultState, shopifySettings} from 'HeaderConfigApp/constants/states';

/**
 * Get initial state from Shopify
 * @returns {*}
 */
export default function getInitialState() {
    let currentSettings;

    try {
        currentSettings = fromJS({
            data: JSON.parse(shopifySettings),
            shouldComponentUpdate: false
        });
    }
    catch (err) {
        console.warn('Data not valid ! The default settings will be used instead ');
        currentSettings = defaultState.get('HeaderConfig');
    }

    return currentSettings;
}


