import {fromJS} from 'immutable';

export const defaultState = fromJS({
    MyAccount: {
        activeLink: {
            loggedOut: 'Register',
            loggedIn: 'MyAccount'
        }
    }
});

const MY_ACCOUNT_ACTIVATE_LINK = 'MY_ACCOUNT_ACTIVATE_LINK';

// Reducer
export default (state = defaultState, action) => {
    switch (action.type) {
        case MY_ACCOUNT_ACTIVATE_LINK: {
            const {activeLink, loggedIn} = action;
            return state.setIn(['activeLink', loggedIn ? 'loggedIn' : 'loggedOut'], activeLink);
        }

        default: {
            return state.get('MyAccount');
        }
    }
};

// Action Creators
export const activateLink = (payload) => ({
    type: MY_ACCOUNT_ACTIVATE_LINK, ...payload
});
