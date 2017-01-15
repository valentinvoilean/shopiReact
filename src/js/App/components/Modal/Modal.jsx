import React, {PropTypes, Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import uuid from 'uuid';

import styles from './Modal.scss';

const propTypes = {
    isLight: PropTypes.bool,
    isOpen: PropTypes.bool,
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
    isOpen: false,
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
        const {isLight, isOpen, onClick, children, className, overlayClassName} = this.props;
        const overlayClasses = classNames(styles.modal, {
            [`${styles.modalLight}`]: isLight
        }, overlayClassName);

        if (!isOpen) { return null; }

        /* eslint-disable */
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={true}
            >
                <div tabIndex="0"
                     className={overlayClasses}
                     onClick={onClick}
                     key={uuid.v4()}
                >
                    {children === null ? null : <div className={className}>{children}</div>}
                </div>
            </ReactCSSTransitionGroup>
        );
        /* eslint-enable */
    }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
