import React, {PropTypes} from 'react';

const propTypes = {
    glyph: PropTypes.string,
    className: PropTypes.string
};

export default function Icon({glyph, className = 'icon'}) {
    return (
        <svg className={className}>
            <use xlinkHref={glyph} />
        </svg>
    );
}

Icon.propTypes = propTypes;
