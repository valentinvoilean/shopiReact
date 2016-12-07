import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import styles from './code.scss';

export default class CodeBox extends React.Component {
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

    _handleCopy() {
        this.setState({copied: true});
    }

    render() {
        const buttonClass = `${styles.copy} ${this.state.copied ? styles.copied : ''}`;

        return (
            <div className={styles.codeContainer}>
                <code className={styles.code}>{this.props.text}</code>
                <CopyToClipboard text={this.props.text} onCopy={this._handleCopy}>
                    <button className={buttonClass}>Click to copy</button>
                </CopyToClipboard>
            </div>
        );
    }
}
