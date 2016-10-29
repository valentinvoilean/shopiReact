import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HeaderConfigBox from 'components/headerConfig';

import {loadHeaderSettings, saveHeaderSettings} from 'redux/modules/headerConfig';

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
        actions: bindActionCreators({loadHeaderSettings, saveHeaderSettings}, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderConfigContainer);
