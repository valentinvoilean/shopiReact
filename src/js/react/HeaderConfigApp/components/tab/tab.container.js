import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import TabView from './tab.view';
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

export default compose(
    DragDropContext(HTML5Backend),
    connect(mapStateToProps, mapDispatchToProps)
)(TabView);

