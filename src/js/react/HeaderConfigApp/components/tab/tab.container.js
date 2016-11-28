import React, {PropTypes} from 'react';

import {RowView, CellContainer, CodeContainer} from 'HeaderConfigApp/components';

import styles from 'HeaderConfigApp/styles/modal.scss';

export default class TabContainer extends React.Component {

    static propTypes = {
        items: PropTypes.object.isRequired,
        globalState: PropTypes.object.isRequired,
        mediaQuery: PropTypes.string.isRequired
    };

    state = {
        items: this.props.items
    };

    constructor(props) {
        super(props);

        this._updatePositions = this._updatePositions.bind(this);
    }

    shouldComponentUpdate() {
        return false;
    }

    _updatePositions(to) {
        this.setState(prevState => {
            return {
                items: {
                    ...prevState.items,
                    [to.dataset.id]: [...to.children].map(item => item.dataset.id)
                }
            };
        });

        if (this.state.modified) {
            console.log('modified, update store', this.state.items);
        }
        else {
            this.setState({modified: true});
        }
    }

    render() {
        const {items, globalState, mediaQuery} = this.props;

        return (
            <div>
                <div className="col-md-6">
                    <h2 className={styles.h2}>1. Available components to drag & drop</h2>
                    <div className={styles.componentsContainer}>
                        <CellContainer name='Hidden'
                                       items={items}
                                       mediaQuery={mediaQuery}
                                       save={this._updatePositions}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <h2 className={styles.h2}>3. Generated code to be copied</h2>
                    <div className={styles.codeContainer}>
                        <CodeContainer text={JSON.stringify(globalState)} />
                    </div>
                </div>

                <div className={styles.container}>
                    <h2 className={styles.h2}>2. Header - Drag & drop components in these boxes</h2>

                    <p> Drag & drop the components into the next boxes. You can also sort them once they are inside the
                        boxes.</p>

                    <div className={styles.header + ' ' + styles[mediaQuery]}>
                        <RowView {...this.props} currentPosition={0} save={this._updatePositions} />
                        <RowView {...this.props} currentPosition={1} save={this._updatePositions} />
                        <RowView {...this.props} currentPosition={2} save={this._updatePositions} />
                    </div>
                </div>
            </div>
        );
    }
}
