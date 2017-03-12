import React, {PropTypes} from 'react';

const propTypes = {
    children: PropTypes.array.isRequired,
};

export default function MyAccountVisibleSide({children}) {

    return (
        <div className="myAccount__visibleSide">
            {children}
        </div>
    );
}

MyAccountVisibleSide.propTypes = propTypes;
