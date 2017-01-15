import React, {PropTypes} from 'react';
import {Modal} from 'App/components';

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
            test
        </Modal>
    );
}

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
