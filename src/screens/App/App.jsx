import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from 'config/store/configureStore';

import {Header, Footer} from './components';

export default class App extends React.PureComponent {
    componentDidMount() {
        this.header = document.createElement('header');
        this.footer = document.createElement('footer');

        this.main = document.querySelector('main');
        this.section = this.main.querySelector('section');
        this.article = this.section.querySelector('article');

        this.section.appendChild(this.footer);
        this.section.insertBefore(this.header, this.article);

        this.componentDidUpdate();
    }

    componentDidUpdate() {
        const store = configureStore();

        ReactDOM.render(
            <Provider store={store}>
                <Header />
            </Provider>
            , this.header);

        ReactDOM.render(
            <Provider store={store}>
                <Footer />
            </Provider>
            , this.footer);
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.header);
        ReactDOM.unmountComponentAtNode(this.footer);
        this.main.removeChild(this.header);
        this.main.removeChild(this.footer);
    }

    render() {
        return null;
    }
}

App.contextTypes = { store: PropTypes.object };
