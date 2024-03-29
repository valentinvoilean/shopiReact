import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import {MenuSidebar} from 'screens/App/components/Header/components';

import {SHARED_CLASSES} from 'shared/constants/classes';

import * as actions from 'shared/ducks/MainMenu.duck';

const propTypes = {
    mainMenuState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

export class MenuIconPure extends Component {
    componentDidMount() {
        this.sidebar = document.createElement('aside');

        this.main = document.getElementsByTagName('main')[0];
        this.section = this.main.getElementsByTagName('section')[0];

        this.main.insertBefore(this.sidebar, this.section);

        this.componentDidUpdate();
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidUpdate() {
        ReactDOM.render(
            <Provider store={this.context.store}>
                <MenuSidebar />
            </Provider>
            , this.sidebar);
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.sidebar);
        this.main.removeChild(this.sidebar);
    }

    render() {
        const {mainMenuState, actions} = this.props;

        const toggleByKeboard = (e) => {
            if (e.key === 'Enter') {
                actions.toggleMenu();
            }
        };

        const elClasses = classNames('menuIcon', 'menuIcon--x', {
            [`${SHARED_CLASSES.active}`]: mainMenuState.getIn(['sidebar', 'active']),
        });

        return (
            <a className={elClasses}
               onClick={actions.toggleMenu}
               onKeyDown={toggleByKeboard}
               tabIndex="0"
               role="button"
            >
                <span>toggle menu</span>
            </a>
        );
    }
}

MenuIconPure.propTypes = propTypes;
MenuIconPure.contextTypes = {
    store: PropTypes.object,
};

export default connect(
    state => ({mainMenuState: state.mainMenu}),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(MenuIconPure);
