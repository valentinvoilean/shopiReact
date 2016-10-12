import React from 'react';

export default class extends React.Component {
    render() {
        let classNames = `container ${this.props.className}`;

        return (
            <div className="headerTop">
                <div className={classNames}>{this.props.children}</div>
            </div>
        );
    }
}


