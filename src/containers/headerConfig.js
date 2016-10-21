import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from 'actions/headerConfig';
import HeaderConfigBox from 'components/headerConfig';

export const HeaderConfigContainer = (props) => {
    return (
        <HeaderConfigBox
            saveHeaderSettings={props.actions.saveHeaderSettings}
            loadHeaderSettings={props.actions.loadHeaderSettings}
            headerConfig={props.headerConfig}
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
