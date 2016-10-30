import {defaultState, validStates} from './headerStates';

export const validateState = state => {
    let wantedState = {...state},
        newState = {},
        areas,
        validAreas,

        _loadDefaultSettings = (mediaQuery) => {
            console.warn(`Conditions not met; default settings will be loaded.`);
            newState[mediaQuery] = {...defaultState.HeaderConfig[mediaQuery]};
        },

        _parseEachHeaderArea = (mediaQuery) => {
            for (let area in areas) {
                if (areas.hasOwnProperty(area)) {

                    areas[area].map((item) => {
                        if (validAreas[area].indexOf(item) === -1) {
                            _loadDefaultSettings(mediaQuery);
                            return false;
                        }
                    });
                }
            }
        };

    return (() => {
        // Go trough each media query
        for (let mediaQuery in validStates) {

            if (validStates.hasOwnProperty(mediaQuery) && wantedState.hasOwnProperty(mediaQuery)) {
                newState[mediaQuery] = newState[mediaQuery] ? newState[mediaQuery] : {};

                areas = {...wantedState[mediaQuery]};
                validAreas = {...validStates[mediaQuery]};
                newState[mediaQuery] = areas;

                _parseEachHeaderArea(mediaQuery);
            }
            else { // return default settings for the current media query
                _loadDefaultSettings(mediaQuery);
            }
        }

        return {...defaultState.HeaderConfig, ...newState};
    })();
};
