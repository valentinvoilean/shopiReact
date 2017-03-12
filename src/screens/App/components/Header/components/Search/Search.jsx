import React from 'react';

import {Icon} from 'shared/components';
import search from 'static/svg/search.svg';

export default function Search() {
    return (
        <Icon glyph={search} className="search" />
    );
}
