import React, { Component } from 'react';

export class Wishlist extends Component {
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
