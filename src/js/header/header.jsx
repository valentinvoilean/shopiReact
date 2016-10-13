import React from 'react';

import {HeaderTop, HeaderBottom, HeaderMain} from './';

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.topHeaderData = {
            leftSide: {
                mobile: [],
                tablet: [],
                desktop: []
            },
            center: {
                mobile: [],
                tablet: [],
                desktop: []
            },
            rightSide: {
                mobile: [],
                tablet: [],
                desktop: []
            }
        };

        this.data = {
            MyAccount: {
                mobile: {position: 'top_left', order: 1},
                tablet: {position: 'top_center', order: 0},
                desktop: {position: 'top_right', order: 0}
            },
            Wishlist: {
                mobile: {position: 'top_left', order: 0},
                tablet: {position: 'top_left', order: 0},
                desktop: {position: 'top_right', order: 1}
            }
        };
    }

    componentDidMount() {
        console.warn('mounted');
    }

    _checkSide(child) {
        const data = this.data;
        const childName = child.props.name;
        const mediaQueries = ['mobile', 'tablet', 'desktop'];

        mediaQueries.map((mq) => {
            let childPosition = data[childName][mq].position;
            let childOrder = data[childName][mq].order;

            switch (childPosition) {
                case 'top_left':
                    this.topHeaderData.leftSide[mq][childOrder] = child;
                    break;
                case 'top_center':
                    this.topHeaderData.center[mq][childOrder] = child;
                    break;
                default :
                    this.topHeaderData.rightSide[mq][childOrder] = child;
            }
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
                <HeaderTop data={this.topHeaderData}/>
            </div>
        );
    }
}
