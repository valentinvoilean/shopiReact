import React from 'react';
import styles from 'styles/components/configBox/config-box.scss';
import CSSModules from 'react-css-modules';

const HeaderConfigTabPanel = function (props) {
    return (
        <div>
            <h1 styleName='h1'>{props.children}</h1>
            <div className="col-md-6">
                <h2 styleName='h2'>1. Available components to drag & drop</h2>
            </div>
            <div className="col-md-6">
                <h2 styleName='h2'>3. Generated code to be copied</h2>
            </div>
        </div>
    );
};

export default CSSModules(HeaderConfigTabPanel, styles, {allowMultiple: true});
