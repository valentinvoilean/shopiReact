import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';
import uuid from 'uuid';

import styles from './Modal.scss';

const propTypes = {
    isLight: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    overlayClassName: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.string
    ])
};

const defaultProps = {
    isLight: false,
    onClick: () => {},
    children: null,
    overlayClassName: '',
    className: ''
};

class Modal extends Component {

    shouldComponentUpdate() {
        return true;
    }

    render() {
        const {isLight, onClick, children, className, overlayClassName} = this.props;
        const overlayClasses = classNames(styles.modal, {
            [`${styles.modalLight}`]: isLight
        }, overlayClassName);

        /* eslint-disable */
        return (
            <div tabIndex="0"
                 className={overlayClasses}
                 onClick={onClick}
                 key={uuid.v4()}
            >
                {children === null ? null : <div className={className}>{children}</div>}
            </div>
        );
        /* eslint-enable */
    }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
