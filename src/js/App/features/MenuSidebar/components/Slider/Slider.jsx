import React, {PropTypes} from 'react';
import classNames from 'classnames';

import {Modal} from 'App/components';

import styles from './Slider.scss';

const propTypes = {
    mainMenuState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

const defaultProps = {
    mainMenuState: {
        getIn: () => {}
    },
    actions: {
        toggleMenu: () => {}
    }
};

export default function Slider({mainMenuState, actions}) {
    const menuClasses = classNames(styles.menu);

    return (
        <div>
            <div className={menuClasses}></div>
            <Modal isOpen={mainMenuState.getIn(['sidebar', 'active'])}
                   onClick={actions.toggleMenu}
            />
        </div>
    );
}

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;
