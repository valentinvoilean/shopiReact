import React from 'react';

import GeneratedCode from 'HeaderConfigApp/components/generatedCode';

// Functional Component
export default class CodeContainer extends React.Component {
    static propTypes = {
        text: React.PropTypes.string
    };

    state = { copied: false };

    _onCopy() {
      this.setState({copied: true});
    }

    render() {
        return <GeneratedCode text={this.props.text}
                              copied={this.state.copied}
                              onCopy={this._onCopy.bind(this)}/>;
    }
}
