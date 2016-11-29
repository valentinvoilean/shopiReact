import React from 'react';

import CodeView from './code.view';

class CodeContainer extends React.Component {
    static propTypes = {
        text: React.PropTypes.string.isRequired
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
        return (<CodeView text={this.props.text} copied={this.state.copied} handleCopy={this._handleCopy} />);
    }
}

export default CodeContainer;
