import React from 'react';

export class HeaderMain extends React.Component {
    render() {
        return (
            <div className="headerMain">
                <div className="container">{this.props.children}</div>
            </div>
        );
    }
}


