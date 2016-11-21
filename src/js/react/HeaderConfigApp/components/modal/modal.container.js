import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ModalView from './modal.view';
import * as actions from 'HeaderConfigApp/redux/modules/modal';

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
)(ModalView);
