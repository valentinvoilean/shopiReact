import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {HeaderWrapper} from 'HeaderConfigApp/components';
import * as actions from 'HeaderConfigApp/ducks/App.js';

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
)(HeaderWrapper);
