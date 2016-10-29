import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './modules/reducer';

export default function configureStore(initialState) {
    const middlewares = [
        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
        thunkMiddleware
    ];

    if (process.env.NODE_ENV === 'development') {
        // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
        middlewares.push(reduxImmutableStateInvariant());

        const store = createStore(rootReducer, initialState, compose(
            applyMiddleware(...middlewares),
            window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
            )
        );

        if (module.hot) {
            // Enable Webpack hot module replacement for reducers
            module.hot.accept('./modules/reducer.js', () => {
                const nextReducer = require('./modules/reducer.js').default; // eslint-disable-line global-require
                store.replaceReducer(nextReducer);
            });
        }

        return store;
    }

    return createStore(rootReducer,
        initialState, compose(applyMiddleware(...middlewares))
    );
}
