import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuid from 'uuid';

import * as actions from 'HeaderConfigApp/actions/modalActions';

import Cell from 'HeaderConfigApp/components/cell.jsx';
import {horizontalPositions, verticalPositions} from 'HeaderConfigApp/constants/positions';
import styles from 'HeaderConfigApp/styles/modal.scss';

export class TabContainer extends React.Component {

    static propTypes = {
        mediaQuery: React.PropTypes.string,
        actions: PropTypes.object.isRequired,
        headerConfig: React.PropTypes.object
    };

    getCells(curPos) {
        return horizontalPositions.map(
            (pos) => (
                <Cell key={uuid.v4()}
                      name={`${curPos}${pos}`}
                      save={this.props.actions.save}
                      remove={this.props.actions.remove}
                      mediaQuery={this.props.mediaQuery}
                      items={this.items}/>
            )
        );
    };

    showTopCells() {
        if (this.props.mediaQuery !== 'mobile') {
            return (
                <div className={styles.headerArea}>
                    { this.getCells(verticalPositions[0]) }
                </div>
            );
        }
    };

    render() {
        this.items = this.props.headerConfig[this.props.mediaQuery];

        return (
            <div>
                <div className="col-md-6">
                    <h2 className={styles.h2}>1. Available components to drag & drop</h2>
                    <div className={styles.componentsContainer}>
                        <Cell save={this.props.actions.save} remove={this.props.actions.remove} mediaQuery={this.props.mediaQuery} name="Hidden" items={this.items}/>
                    </div>
                </div>

                <div className="col-md-6">
                    <h2 className={styles.h2}>3. Generated code to be copied</h2>
                    <div className={styles.codeContainer}>
                        <code className={styles.code}>{JSON.stringify(this.props.headerConfig)}</code>
                        <div className={styles.copy}>Click to copy</div>
                    </div>
                </div>

                <div className={styles.container}>
                    <h2 className={styles.h2}>2. Header - Drag & drop components in these boxes</h2>

                    <p> Drag & drop the components into the next boxes. You can also sort them once they are inside the
                        boxes.</p>

                    <div className={styles.header}>
                        { this.showTopCells() }
                        <div className={styles.headerArea}> { this.getCells(verticalPositions[1]) } </div>
                        <div className={styles.headerArea}> { this.getCells(verticalPositions[2]) } </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        headerConfig: state.headerConfig
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabContainer);
