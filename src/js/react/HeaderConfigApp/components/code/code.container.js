import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import styles from 'HeaderConfigApp/styles/modal.scss';

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
        const buttonClass = `${styles.copy} ${this.state.copied ? styles.copied : ''}`;

        return (
            <div className={styles.codeContainer}>
                <code className={styles.code}>{this.props.text}</code>
                <CopyToClipboard text={this.props.text} onCopy={this._handleCopy}>
                    <div className={buttonClass}>Click to copy</div>
                </CopyToClipboard>
            </div>
        );
    }
}

export default CodeContainer;
