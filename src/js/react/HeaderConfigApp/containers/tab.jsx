import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuid from 'uuid';

import * as actions from 'HeaderConfigApp/actions/modalActions';

import Tab from 'HeaderConfigApp/components/tab.jsx';
import Cell from 'HeaderConfigApp/components/cell.jsx';
import {horizontalPositions, verticalPositions} from 'HeaderConfigApp/constants/positions';

export class TabContainer extends React.Component {

    constructor(props) {
        super(props);

        this.getCells = this.getCells.bind(this);
    }

    static propTypes = {
        mediaQuery: React.PropTypes.string,
        actions: React.PropTypes.object.isRequired,
        headerConfig: React.PropTypes.object
    };

    getCells(curPos) {
        if (curPos === void 0) {
            return (
                <Cell name="Hidden"
                      items={this.items}
                      mediaQuery={this.props.mediaQuery}
                      actions={this.props.actions}/>
            );
        }

        return horizontalPositions.map(
            (pos) => (
                <Cell key={uuid.v4()}
                      name={`${verticalPositions[curPos]}${pos}`}
                      items={this.items}
                      mediaQuery={this.props.mediaQuery}
                      actions={this.props.actions}/>
            )
        );
    };

    render() {
        const {mediaQuery, headerConfig} = this.props;

        this.items = this.props.headerConfig[this.props.mediaQuery];

        return (
            <Tab getCells={this.getCells}
                 mediaQuery={mediaQuery}
                 headerConfig={headerConfig}
            />
        );
    }
}

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
)(TabContainer);
