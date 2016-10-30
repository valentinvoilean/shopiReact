import {defaultState} from './headerStates';

export const getInitialState = () => {
    const shopifySettings = '{"mobile":{"Logo":{"position":"MainLeft","order":1},"Menu":{"position":"MainLeft","order":0},"MyAccount":{"position":"MainRight","order":1},"Wishlist":{"position":"Menu","order":1}},"tablet":{"Logo":{"position":"MainLeft","order":0},"Menu":{"position":"MainCenter","order":0},"MyAccount":{"position":"TopRight","order":0},"Wishlist":{"position":"TopRight","order":1}},"desktop":{"Logo":{"position":"MainLeft","order":0},"Menu":{"position":"MainCenter","order":0},"MyAccount":{"position":"TopRight","order":0},"Wishlist":{"position":"TopRight","order":1}}}';
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
