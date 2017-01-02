import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {HeaderTop, HeaderBottom, HeaderMain} from './features';

export const PureHeader = ({globalState}) => {
    return (
        <div className="header">
            <HeaderTop globalState={globalState} />
            <HeaderMain globalState={globalState} />
            <HeaderBottom globalState={globalState} />
        </div>
    );
};

PureHeader.propTypes = {
    globalState: PropTypes.object.isRequired
};

export default connect(
    state => ({globalState: state.headerConfig})
)(PureHeader);
