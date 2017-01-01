import React, { Component } from 'react';

export default class MyAccount extends Component {
    static defaultProps = {
        name: 'MyAccount'
    };

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div className="myAccount"> My Account </div>
        );
    }
}
