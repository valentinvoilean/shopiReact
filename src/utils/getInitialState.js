import {defaultState} from 'utils';

export const getInitialState = () => {
    const shopifySettings = '{"MyAccount":{"mobile":{"position":"Menu","order":1},"tablet":{"position":"MainCenter","order":0},"desktop":{"position":"BottomRight","order":0}},"Wishlist":{"mobile":{"position":"TopLeft","order":0},"tablet":{"position":"TopLeft","order":0},"desktop":{"position":"TopRight","order":1}}}';
    let currentState;

    try {
        currentState = JSON.parse(shopifySettings);
    }
    catch (err) {
        console.warn('Data not valid ! The default settings will be used instead ');
        currentState = defaultState.HeaderConfig;
    }

    return currentState;
};
