import {defaultState} from 'HeaderConfigApp/constants/states';

export const getInitialState = () => {
    const shopifySettings = '{"mobile":{"Flyout":[],"Hidden":[],"MainLeft":["Menu"],"MainCenter":["Logo"],"MainRight":["MyAccount","Wishlist"],"BottomLeft":[],"BottomCenter":[],"BottomRight":[]},"tablet":{"Hidden":[],"TopLeft":[],"TopCenter":[],"TopRight":["MyAccount","Wishlist"],"MainLeft":["Logo"],"MainCenter":["Menu"],"MainRight":[],"BottomLeft":[],"BottomCenter":[],"BottomRight":[]},"desktop":{"Hidden":[],"TopLeft":[],"TopCenter":[],"TopRight":["MyAccount","Wishlist"],"MainLeft":["Logo"],"MainCenter":["Menu"],"MainRight":[],"BottomLeft":[],"BottomCenter":[],"BottomRight":[]}}';
    let currentState;

    try {
        currentState = JSON.parse(shopifySettings);
    }
    catch (err) {
        console.warn('Data not valid ! The default settings will be used instead ');
        currentState = {...defaultState.HeaderConfig};
    }

    return currentState;
};
