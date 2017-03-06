import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from 'store/configureStore';

import {Header} from './features/Header';
import Footer from './features/Footer';

export default class App extends React.PureComponent {
    componentDidMount() {
        this.header = document.createElement('header');
        this.footer = document.createElement('footer');

        this.main = document.getElementsByTagName('main')[0];
        this.section = this.main.getElementsByTagName('section')[0];
        this.article = this.section.getElementsByTagName('article')[0];

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

App.contextTypes = { store: React.PropTypes.object };
