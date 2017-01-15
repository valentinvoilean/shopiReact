import React, {PropTypes} from 'react';

import {Modal} from 'App/components';

import styles from './Overlay.scss';

const propTypes = {
    mainMenuState: PropTypes.object.isRequired
};

const defaultProps = {
    mainMenuState: {
        getIn: () => {}
    }
};

export default function Overlay({mainMenuState}) {
    const isSidebarActive = mainMenuState.getIn(['sidebar', 'active']);

    return (
        <Modal isOpen={isSidebarActive} isLight>
            <ul className={styles.menu}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </Modal>
    );
}

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
