import React, {PropTypes} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import styles from 'HeaderConfigApp/styles/modal.scss';


const CodeView = ({text, copied, handleCopy}) => {

    const buttonClass = `${styles.copy} ${copied ? styles.copied : ''}`;

    return (
        <div className={styles.codeContainer}>
            <code className={styles.code}>{text}</code>
            <CopyToClipboard text={text} onCopy={handleCopy}>
                <div className={buttonClass}>Click to copy</div>
            </CopyToClipboard>
        </div>
    );
};

CodeView.propTypes = {
    text: PropTypes.string.isRequired,
    copied: PropTypes.bool.isRequired,
    handleCopy: PropTypes.func.isRequired
};

export default CodeView;
