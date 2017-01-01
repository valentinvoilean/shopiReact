import React, { Component } from 'react';

export default class Wishlist extends Component {
    static defaultProps = {
        name: 'Wishlist'
    };

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div> Wishlist </div>
        );
    }
}
