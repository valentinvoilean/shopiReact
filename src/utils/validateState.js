import {defaultState} from 'utils';

const validStates = {
    mobile: {
        Logo: ['MainLeft', 'MainCenter'],
        Menu: ['MainLeft', 'MainRight'],
        MyAccount: ['MainLeft|Logo-MainCenter', 'MainRight', 'Menu'],
        Wishlist: ['MainLeft|Logo-MainCenter', 'MainRight', 'Menu']
    },
    tablet: {
        Logo: ['MainLeft', 'MainCenter'],
        Menu: ['MainCenter', 'BottomLeft', 'BottomCenter', 'BottomRight'],
        MyAccount: ['TopLeft', 'TopRight', 'MainLeft|Logo-MainCenter', 'MainRight', 'BottomLeft', 'BottomRight'],
        Wishlist: ['TopLeft', 'TopRight', 'MainLeft|Logo-MainCenter', 'MainRight', 'BottomLeft', 'BottomRight']
    },
    desktop: {
        Logo: ['MainLeft', 'MainCenter'],
        Menu: ['MainCenter', 'BottomLeft', 'BottomCenter', 'BottomRight'],
        MyAccount: ['TopLeft', 'TopRight', 'MainLeft|Logo-MainCenter', 'MainRight', 'BottomLeft', 'BottomRight'],
        Wishlist: ['TopLeft', 'TopRight', 'MainLeft|Logo-MainCenter', 'MainRight', 'BottomLeft', 'BottomRight']
    }
};

export const validateState = state => {
    let wantedState = {...state},
        newState = {},
        components,

        _checkCondition = (component, mediaQuery, fullCondition) => {
            const conditionArray = fullCondition.split('-'),
                condition = conditionArray[0],
                position = conditionArray[1];

            if (wantedState[mediaQuery][condition] === position) {
                newState[mediaQuery][component] = components[component];
                return true;
            }
            else {
                return false;
            }
        },

        _parseEachComponent = (mediaQuery) => {
            // Go trough each component
            for (let component in components) {
                if (components.hasOwnProperty(component)) {
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

                    if (!conditionMet) {
                        console.warn(`Conditions not met; default settings will be loaded.`);
                        newState[mediaQuery] = {...defaultState.HeaderConfig[mediaQuery]};
                        break;
                    }
                }
            }
        };

    return (() => {
        // Go trough each media query
        for (let mediaQuery in wantedState) {
            if (wantedState.hasOwnProperty(mediaQuery)) {
                newState[mediaQuery] = newState[mediaQuery] ? newState[mediaQuery] : {};
                components = {...wantedState[mediaQuery]};
                _parseEachComponent(mediaQuery);
            }
        }

        return {...defaultState.HeaderConfig, ...newState};
    })();
};
