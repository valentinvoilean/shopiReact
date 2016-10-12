import React from 'react';

export default class extends React.Component {

    constructor(props) {
        super(props);

        this.leftSideComponents = [];
        this.centerComponents = [];
        this.rightSideComponents = [];
    }

    _sortCompoents() {
        console.log(this.props.data);
    }

    render() {
        this._sortCompoents();

        return (
            <div className="headerTop">
                <div className="container noClear">
                    <div className="headerTop__items">{leftSideComponents}</div>
                    <div className="headerTop__items">{centerComponents}</div>
                    <div className="headerTop__items">{rightSideComponents}</div>
                </div>
            </div>
        );
    }
}


