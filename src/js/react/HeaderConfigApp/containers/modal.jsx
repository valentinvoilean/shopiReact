import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Modal from 'HeaderConfigApp/components/modal';
import * as actions from 'HeaderConfigApp/actions/modalActions';

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
)(Modal);
