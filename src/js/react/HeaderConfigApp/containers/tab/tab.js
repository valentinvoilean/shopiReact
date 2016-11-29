import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import uuid from 'uuid';

import * as actions from 'HeaderConfigApp/redux/modules/modal';

import {Row, Cell, CodeBox} from 'HeaderConfigApp/components';

import styles from 'HeaderConfigApp/styles/modal.scss';

@connect(
    state => ({globalState: state.headerConfig}),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)
export default class TabContainer extends React.Component {

    static propTypes = {
        globalState: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
        mediaQuery: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this._updatePositions = this._updatePositions.bind(this);
        this._remove = this._remove.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.globalState.shouldComponentUpdate;
    }

    _updatePositions(to, from) {
        const {actions, mediaQuery} = this.props;

        actions.save({
            to: [to.dataset.id],
            children: [...to.children].map(item => item.dataset.id),
            mediaQuery,
            shouldComponentUpdate: to.dataset.id === from.dataset.id
        });
    }

    _remove(item, from) {
        const {actions, mediaQuery} = this.props;
        actions.remove({item, from, mediaQuery});
    }

    render() {
        const {globalState, mediaQuery} = this.props;

        return (
            <div>
                <div className="col-md-6">
                    <h2 className={styles.h2}>1. Available components to drag & drop</h2>
                    <div className={styles.componentsContainer}>
                        <Cell key={uuid.v4()}
                              name='Hidden'
                              items={globalState.data[mediaQuery]}
                              mediaQuery={mediaQuery}
                              save={this._updatePositions}
                              remove={this._remove}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <h2 className={styles.h2}>3. Generated code to be copied</h2>
                    <div className={styles.codeContainer}>
                        <CodeBox text={JSON.stringify(globalState.data)} />
                    </div>
                </div>

                <div className={styles.container}>
                    <h2 className={styles.h2}>2. Header - Drag & drop components in these boxes</h2>

                    <p> Drag & drop the components into the next boxes. You can also sort them once they are inside the
                        boxes.</p>

                    <div className={styles.header + ' ' + styles[mediaQuery]}>
                        <Row {...this.props}
                             items={globalState.data[mediaQuery]}
                             currentPosition={0}
                             save={this._updatePositions}
                             remove={this._remove}
                        />
                        <Row {...this.props}
                             items={globalState.data[mediaQuery]}
                             currentPosition={1}
                             save={this._updatePositions}
                             remove={this._remove}
                        />
                        <Row {...this.props}
                             items={globalState.data[mediaQuery]}
                             currentPosition={2}
                             save={this._updatePositions}
                             remove={this._remove}
                        />
                    </div>
                </div>
            </div>
        );
    }
}