import React from 'react';
import PropTypes from 'prop-types';
import {includes} from 'lodash';

import styles from './CloseButton.scss';
import {validStates} from 'shared/constants/headerSettings';
import {bindMethod} from 'shared/utils';

export default class CloseButton extends React.PureComponent {
    static propTypes = {
        item: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        mediaQuery: PropTypes.string.isRequired,
        cellName: PropTypes.string.isRequired,
    };

    constructor(props) {
      super(props);
      bindMethod(this);
    }

    handleClick() {
        const {onClick, item} = this.props;

        onClick(item);
    }

    render() {
        const {item, mediaQuery, cellName} = this.props;

        if (cellName === 'Hidden') {
            return null;
        }

        if (includes(validStates.get(mediaQuery).Hidden, item)) {
            return (<button className={styles.closeButton} onClick={this.handleClick}>&#10005;</button>);
        }
        else {
            return null;
        }
    }
}
