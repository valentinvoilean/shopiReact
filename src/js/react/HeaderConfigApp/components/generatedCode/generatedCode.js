import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import styles from 'HeaderConfigApp/styles/modal.scss';

class GeneratedCode extends React.Component {
    static propTypes = {
        text: React.PropTypes.string.isRequired,
        onCopy: React.PropTypes.func.isRequired,
        copied: React.PropTypes.string
    };

    state = { copied: false };

    shouldComponentUpdate() {
        return true;
    }

    _onCopy() {
        this.setState({copied: true});
    }

    render() {
        const {text, onCopy, copied} = this.props;
        const buttonClass = `${styles.copy} ${copied ? styles.copied : ''}`;

        return (
            <div className={styles.codeContainer}>
                <code className={styles.code}>{text}</code>
                <CopyToClipboard text={text} onCopy={onCopy}>
                    <div className={buttonClass}>Click to copy</div>
                </CopyToClipboard>
            </div>
        );
    }
}

export default GeneratedCode;
