import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div className="headerMain">
                <div className="container">{this.props.children}</div>
            </div>
        );
    }
}
