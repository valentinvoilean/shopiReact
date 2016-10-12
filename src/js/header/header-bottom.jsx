import React from 'react';

export class HeaderBottom extends React.Component {

    _sortByPriority(a, b) {
        if (a.props.priority < b.props.priority) {
            return -1;
        }
        if (a.props.priority > b.props.priority) {
            return 1;
        }
        return 0;
    }

    render() {
        let children = this.props.children;

        //children.sort(this._sortByPriority);

        return (
            <div className="headerBottom">
                <div className="topInfo">
                    <div className="container">Info</div>
                </div>
                {this.props.children}
            </div>
        );
    }
}


