import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {HeaderWrapper} from 'react-header-configurator/components';
import * as actions from 'react-header-configurator/ducks/App.js';

export const App = ({actions, headerConfig}) => {
    return (
        <HeaderWrapper
            saveHeaderSettings={actions.saveHeaderSettings}
            loadHeaderSettings={actions.loadHeaderSettings}
            headerConfig={headerConfig}
        />
    );
};

App.propTypes = {
    actions: PropTypes.object.isRequired,
    headerConfig: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        headerConfig: state.headerConfig
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
