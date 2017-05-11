import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';

import {bindMethod} from 'shared/utils';
import styles from './CodeBox.scss';

export default class CodeBox extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    bindMethod(this);

    this.state = {copied: false};
  }

  handleCopy() {
    this.setState({copied: true});
  }

  render() {
    const buttonClass = `${styles.copy} ${this.state.copied ? styles.copied : ''}`;

    return (
      <div className={styles.codeContainer}>
        <code className={styles.code}>{this.props.text}</code>
        <CopyToClipboard text={this.props.text} onCopy={this.handleCopy}>
          <button className={buttonClass}>Click to copy</button>
        </CopyToClipboard>
      </div>
    );
  }
}
