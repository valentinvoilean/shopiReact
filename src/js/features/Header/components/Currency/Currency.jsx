import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'store/modules/Currency';

const propTypes = {
    globalState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

const defaultProps = {
    globalState: {},
    actions: {}
};

export class PureCurrency extends Component {
    componentDidMount() {
        this.props.actions.itemsFetchData('http://api.fixer.io/latest');
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        const {globalState} = this.props;

        if (globalState.hasError) {
            return <span>Sorry! There was an error loading the items</span>;
        }

        if (globalState.isLoading) {
            return <span>Loading…</span>;
        }

        return <span data={this.props.globalState}> Currency </span>;
    }
}

PureCurrency.propTypes = propTypes;
PureCurrency.defaultProps = defaultProps;

export default connect(
    state => ({globalState: state.currency}),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(PureCurrency);
