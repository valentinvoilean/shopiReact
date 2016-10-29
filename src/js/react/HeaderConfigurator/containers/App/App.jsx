import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HeaderWrapper from 'react-header-configurator/components';

import {loadHeaderSettings, saveHeaderSettings} from 'react-header-configurator/redux/modules/headerConfig';

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
        actions: bindActionCreators({loadHeaderSettings, saveHeaderSettings}, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
