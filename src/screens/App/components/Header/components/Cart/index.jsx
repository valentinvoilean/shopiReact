import React from 'react';

import {Icon} from 'shared/components';
import cart from 'static/svg/cart.svg';

export default function Cart() {
    return (
        <Icon glyph={cart} className="cart" />
    );
}
