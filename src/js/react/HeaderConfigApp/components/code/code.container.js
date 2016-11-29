import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import CodeView from './code.view';

@connect(state => ({globalState: state.headerConfig}))
class CodeContainer extends React.Component {
    static propTypes = {
        globalState: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this._handleCopy = this._handleCopy.bind(this);
    }

    state = { copied: false };

    shouldComponentUpdate() {
        return true;
    }

    componentWillUnmount() {
        this.setState({copied: false});
    }

    _handleCopy() {
        this.setState({copied: true});
    }

    render() {
        const text = JSON.stringify(this.props.globalState);
        return (<CodeView text={text} copied={this.state.copied} handleCopy={this._handleCopy} />);
    }
}

export default CodeContainer;
