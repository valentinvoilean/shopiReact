import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Modal from './modal.component.jsx';
import * as actions from './modal.duck';

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
