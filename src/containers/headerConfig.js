import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from 'actions/headerConfig';
import HeaderConfigBox from 'components/headerConfig';

export const HeaderConfigContainer = ({actions, headerConfig}) => {
    return (
        <HeaderConfigBox
            saveHeaderSettings={actions.saveHeaderSettings}
            loadHeaderSettings={actions.loadHeaderSettings}
            headerConfig={headerConfig}
        />
    );
};

HeaderConfigContainer.propTypes = {
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
)(HeaderConfigContainer);
