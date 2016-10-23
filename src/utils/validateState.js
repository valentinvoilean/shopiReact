import {defaultState} from 'utils';

const validStates = {
    Logo: {
        mobile: ['MainLeft', 'MainCenter'],
        tablet: ['MainLeft', 'MainCenter'],
        desktop: ['MainLeft', 'MainCenter']
    },
    Menu: {
        mobile: ['MainLeft', 'MainRight'],
        tablet: ['MainCenter', 'BottomLeft', 'BottomCenter', 'BottomRight'],
        desktop: ['MainCenter', 'BottomLeft', 'BottomCenter', 'BottomRight']
    },
    MyAccount: {
        mobile: ['MainLeft|Logo-MainCenter', 'MainRight', 'Menu'],
        tablet: ['TopLeft', 'TopRight', 'MainLeft|Logo-MainCenter', 'MainRight', 'BottomLeft', 'BottomRight'],
        desktop: ['TopLeft', 'TopRight', 'MainLeft|Logo-MainCenter', 'MainRight', 'BottomLeft', 'BottomRight']
    },
    Wishlist: {
        mobile: ['MainLeft|Logo-MainCenter', 'MainRight', 'Menu'],
        tablet: ['TopLeft', 'TopRight', 'MainLeft|Logo-MainCenter', 'MainRight', 'BottomLeft', 'BottomRight'],
        desktop: ['TopLeft', 'TopRight', 'MainLeft|Logo-MainCenter', 'MainRight', 'BottomLeft', 'BottomRight']
    }
};

export const validateState = state => {
    let newState = defaultState.HeaderConfig,
        wantedPosition,
        availablePositions,
        fullCondition,

        _checkCondition = (component, mediaQuery) => {
            const conditionArray = fullCondition.split('-');
            const condition = conditionArray[0];
            const position = conditionArray[1];

            if (state[condition][mediaQuery] === position) {
                newState[component][mediaQuery].position = wantedPosition;
                return true;
            }
            else {
                return false;
            }
        },

        _checkWithAvailablePositions = (component, mediaQuery) => {
            let conditionMet = false;

            for (let i = 0; i < availablePositions.length; i++) {
                const availablePositionAndCondition = availablePositions[i].split('|');
                const availablePosition = availablePositionAndCondition[0];
                fullCondition = availablePositionAndCondition[1];

                if (wantedPosition === availablePosition) {

                    if (typeof fullCondition !== 'undefined') {
                        conditionMet = _checkCondition(component, mediaQuery);
                    }
                    else {
                        newState[component][mediaQuery].position = wantedPosition;
                        conditionMet = true;
                    }

                    break;
                }
            }

            if (!conditionMet) {
                console.warn(`Condition not met; default position will be used.`);
            }
        },

        _parseEachMediaQuery = (component) => {
            let mediaQueries = state[component];

            // Go trough each media query
            for (let mediaQuery in mediaQueries) {
                if (mediaQueries.hasOwnProperty(mediaQuery)) {
                    wantedPosition = mediaQueries[mediaQuery].position;
                    availablePositions = validStates[component][mediaQuery];

                    _checkWithAvailablePositions(component, mediaQuery);
                }
            }
        };

    return (() => {
        // Go trough each component
        for (let component in state) {
            if (state.hasOwnProperty(component)) {
                _parseEachMediaQuery(component);
            }
        }

        return newState;
    })();
};
