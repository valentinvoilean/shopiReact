import React, {PropTypes} from 'react';
import {pull} from 'lodash';

import {RowView, CellContainer, CodeContainer} from 'HeaderConfigApp/components';

import styles from 'HeaderConfigApp/styles/modal.scss';

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

    state = {
        items: this.props.globalState[this.props.mediaQuery]
    };

    shouldComponentUpdate() {
        return false;
    }

    _updatePositions(to, from) {
        const {actions, mediaQuery} = this.props;

        this.setState(prevState => {
            return {
                items: {
                    ...prevState.items,
                    [to.dataset.id]: [...to.children].map(item => item.dataset.id)
                },
                modified: to.dataset.id === from.dataset.id
            };
        }, () => {
            if (this.state.modified) {
                actions.save({items: this.state.items, mediaQuery});
            }
        });
    }

    _remove(item, from) {
        const {actions, mediaQuery} = this.props;

        this.setState(prevState => {
            return {
                items: {
                    ...prevState.items,
                    [from]: pull(prevState.items[from], item),
                    Hidden: [...prevState.items.Hidden, item]
                }
            };
        }, () => actions.remove({items: this.state.items, mediaQuery}));
    }

    render() {
        const {globalState, mediaQuery} = this.props;

        return (
            <div>
                <div className="col-md-6">
                    <h2 className={styles.h2}>1. Available components to drag & drop</h2>
                    <div className={styles.componentsContainer}>
                        <CellContainer name='Hidden'
                                       items={globalState[mediaQuery]}
                                       mediaQuery={mediaQuery}
                                       save={this._updatePositions}
                                       remove={this._remove}
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
                        <RowView {...this.props}
                                 items={globalState[mediaQuery]}
                                 currentPosition={0}
                                 save={this._updatePositions}
                                 remove={this._remove}
                        />
                        <RowView {...this.props}
                                 items={globalState[mediaQuery]}
                                 currentPosition={1}
                                 save={this._updatePositions}
                                 remove={this._remove}
                        />
                        <RowView {...this.props}
                                 items={globalState[mediaQuery]}
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
