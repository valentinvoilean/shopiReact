import React, {PropTypes} from 'react';
import styles from './Modal.scss';
import classNames from 'classnames';

const propTypes = {
    isLight: PropTypes.bool,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};

const defaultProps = {
    isLight: false,
    isOpen: false,
    onClick: () => {},
    children: null
};

export default function Modal({isLight, isOpen, onClick, children}) {
    const modalClasses = classNames(styles.modal, {
        [`${styles.modalLight}`]: isLight
    });

    if (!isOpen) { return null; }

    /* eslint-disable */
    return (<div tabIndex="0" className={modalClasses} onClick={onClick}>
        {children}
    </div>);
    /* eslint-enable */
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
