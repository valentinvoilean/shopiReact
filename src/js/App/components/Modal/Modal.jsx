import React, {PropTypes} from 'react';
import styles from './Modal.scss';
import classNames from 'classnames';

const propTypes = {
    isLight: PropTypes.bool,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    overlayClassName: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};

const defaultProps = {
    isLight: false,
    isOpen: false,
    onClick: () => {},
    children: null,
    overlayClassName: '',
    className: ''
};

export default function Modal({isLight, isOpen, onClick, children, className, overlayClassName}) {
    const overlayClasses = classNames(styles.modal, {
        [`${styles.modalLight}`]: isLight
    }, overlayClassName);

    if (!isOpen) { return null; }

    /* eslint-disable */
    return (<div tabIndex="0" className={overlayClasses} onClick={onClick}>
        {children === null ? null : <div className={className}>{children}</div>}
    </div>);
    /* eslint-enable */
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
