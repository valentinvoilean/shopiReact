import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {HeaderTop, HeaderBottom, HeaderMain} from './components/Header';

import {mediaQueries} from 'common/constants/mediaQueries';

export class PureHeader extends Component {
    static propTypes = {
        globalState: PropTypes.object.isRequired,
        children: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);

        console.log(this.props.globalState);

        this.data = {
            MyAccount: {
                mobile: {position: 'TopLeft', order: 1},
                tablet: {position: 'MainCenter', order: 0},
                desktop: {position: 'BottomRight', order: 0}
            },
            Wishlist: {
                mobile: {position: 'TopLeft', order: 0},
                tablet: {position: 'TopLeft', order: 0},
                desktop: {position: 'TopRight', order: 1}
            }
        };
    }

    _checkSide(child) {
        const data = this.data;
        const childName = child.props.name;

        mediaQueries.map((mq) => {
            let childPosition = data[childName][mq].position;
            let childOrder = data[childName][mq].order;

            this.HeaderData = this.HeaderData || {};
            this.HeaderData[childPosition] = this.HeaderData[childPosition] || {};
            this.HeaderData[childPosition][mq] = this.HeaderData[childPosition][mq] || [];
            this.HeaderData[childPosition][mq][childOrder] = child;
        });
    }

    _sortCompoents() {
        const children = this.props.children;

        if (Array.isArray(children)) {
            children.map(this._checkSide.bind(this));
        }
        else {
            this._checkSide(children);
        }
    }

    render() {
        this._sortCompoents();
        return (
            <div className="header">
                <HeaderTop data={this.HeaderData} />
                <HeaderMain data={this.HeaderData} />
                <HeaderBottom data={this.HeaderData} />
            </div>
        );
    }
}

export default connect(
    state => ({globalState: state.headerConfig})
)(PureHeader);
