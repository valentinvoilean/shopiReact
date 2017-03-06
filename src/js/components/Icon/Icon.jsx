import React, {PropTypes} from 'react';

const propTypes = {
    glyph: PropTypes.string.isRequired,
    className: PropTypes.string,
};

const defaultProps = {
    className: '',
};

export default function Icon({glyph, className = 'icon'}) {
    return (
        <svg className={className}>
            <use xlinkHref={glyph} />
        </svg>
    );
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
