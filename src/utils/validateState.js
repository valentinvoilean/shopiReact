import {defaultState, validStates} from 'constants/states';

export const validateState = state => {
    let wantedState = {...state},
        newState = {},
        components,
        validComponents,

        _loadDefaultSettings = (mediaQuery) => {
            console.warn(`Conditions not met; default settings will be loaded.`);
            newState[mediaQuery] = {...defaultState.HeaderConfig[mediaQuery]};
        },

        _checkCondition = (component, mediaQuery, fullCondition) => {
            const conditionArray = fullCondition.split('-'),
                condition = conditionArray[0],
                position = conditionArray[1];

            if (wantedState[mediaQuery][condition].position === position) {
                newState[mediaQuery][component] = components[component];
                return true;
            }
            else {
                return false;
            }
        },

        _parseEachComponent = (mediaQuery) => {
            // Go trough each component
            for (let component in validComponents) {
                if (validComponents.hasOwnProperty(component) && components.hasOwnProperty(component)) {

                    if (wantedState[mediaQuery].hasOwnProperty(component)) {
                        const wantedPosition = components[component].position,
                            availablePositions = validStates[mediaQuery][component];
                        let conditionMet = false;

                        for (let i = 0; i < availablePositions.length; i++) {
                            const availablePositionAndCondition = availablePositions[i].split('|'),
                                availablePosition = availablePositionAndCondition[0],
                                fullCondition = availablePositionAndCondition[1];

                            if (wantedPosition === availablePosition) {

                                if (typeof fullCondition !== 'undefined') {
                                    conditionMet = _checkCondition(component, mediaQuery, fullCondition);
                                }
                                else {
                                    newState[mediaQuery][component] = {...components[component]};
                                    conditionMet = true;
                                }

                                break;
                            }
                        }

                        if (!conditionMet) { // return default settings if the current property not valid
                            _loadDefaultSettings(mediaQuery);
                            break;
                        }
                    }
                }
                else { // return default settings if a component name is missing
                    _loadDefaultSettings(mediaQuery);
                    break;
                }
            }
        };

    return (() => {
        // Go trough each media query
        for (let mediaQuery in validStates) {
            if (validStates.hasOwnProperty(mediaQuery) && wantedState.hasOwnProperty(mediaQuery)) {
                newState[mediaQuery] = newState[mediaQuery] ? newState[mediaQuery] : {};
                components = {...wantedState[mediaQuery]};
                validComponents = {...validStates[mediaQuery]};
                _parseEachComponent(mediaQuery);
            }
            else { // return default settings for the current media query
                _loadDefaultSettings(mediaQuery);
            }
        }

        return {...defaultState.HeaderConfig, ...newState};
    })();
};
