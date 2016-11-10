import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import styles from 'HeaderConfigApp/styles/modal.scss';

const GeneratedCode = props => {
    const {text, onCopy, copied} = props;
    const buttonClass = `${styles.copy} ${copied ? styles.copied : ''}`;

    return (
        <div className={styles.codeContainer}>
            <code className={styles.code}>{text}</code>
            <CopyToClipboard text={text} onCopy={onCopy}>
                <div className={buttonClass}>Click to copy</div>
            </CopyToClipboard>
        </div>
    );
};

GeneratedCode.propTypes = {
    text: React.PropTypes.string,
    copied: React.PropTypes.bool,
    onCopy: React.PropTypes.func
};

export default GeneratedCode;
