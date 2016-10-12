import React from 'react';

export class HeaderTop extends React.Component {

    constructor(props) {
        super(props);

        this.leftSideComponents = [];
        this.centerComponents = [];
        this.rightSideComponents = [];
    }

    _checkSide(child) {
        const data = this.props.data;
        const childName = child.type.name;
        const mediaQuery = 'desktop';

        switch (data[childName][mediaQuery].position) {
            case 'top_left':
                this.leftSideComponents.push(child);
                break;
            case 'top_center':
                this.centerComponents.push(child);
                break;
            default :
                this.rightSideComponents.push(child);
        }
    }

    _sortCompoents() {
        const children = this.props.children;

        if (children.length) {
            children.map((child) => {
               this._checkSide(child);
            });
        }
        else {
            this._checkSide(children);
        }
    }

    render() {
        this._sortCompoents();

        return (
            <div className="headerTop">
                <div className="container noClear">
                    <div className="headerTop__items">{this.leftSideComponents}</div>
                    <div className="headerTop__items">{this.centerComponents}</div>
                    <div className="headerTop__items">{this.rightSideComponents}</div>
                </div>
            </div>
        );
    }
}


