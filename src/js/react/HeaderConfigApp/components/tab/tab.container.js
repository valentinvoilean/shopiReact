import React, {PropTypes} from 'react';
import uuid from 'uuid';

import {RowView, CellContainer, CodeContainer} from 'HeaderConfigApp/components';

import styles from 'HeaderConfigApp/styles/modal.scss';

export default class TabContainer extends React.Component {

    static propTypes = {
        mediaQuery: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.forceUpdate = this.forceUpdate.bind(this);
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div>
                <div className="col-md-6">
                    <h2 className={styles.h2}>1. Available components to drag & drop</h2>
                    <div className={styles.componentsContainer}>
                        <CellContainer key={uuid.v4()} name='Hidden' {...this.props} />
                    </div>
                </div>

                <div className="col-md-6">
                    <h2 className={styles.h2}>3. Generated code to be copied</h2>
                    <div className={styles.codeContainer}>
                        <CodeContainer />
                    </div>
                </div>

                <div className={styles.container}>
                    <h2 className={styles.h2}>2. Header - Drag & drop components in these boxes</h2>

                    <p> Drag & drop the components into the next boxes. You can also sort them once they are inside the
                        boxes.</p>

                    <div className={styles.header + ' ' + styles[this.props.mediaQuery]}>
                        <RowView {...this.props} currentPosition={0} forceUpdate={this.forceUpdate} />
                        <RowView {...this.props} currentPosition={1} forceUpdate={this.forceUpdate} />
                        <RowView {...this.props} currentPosition={2} forceUpdate={this.forceUpdate} />
                    </div>
                </div>
            </div>
        );
    }
}
