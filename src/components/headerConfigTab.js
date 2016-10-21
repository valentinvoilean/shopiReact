import React from 'react';
import styles from 'styles/components/configBox/config-box.scss';
import CSSModules from 'react-css-modules';

const HeaderConfigTab = function (props) {

    for (let key in props.headerConfig) {
        console.warn(props.headerConfig[key][props.filter]);
    }

    const save = () => {
        props.saveHeaderSettings({
            MyAccount: {
                mobile: {position: 'TopRight', order: 2}
            }
        });
    };

    return (
        <div>
            <h1 styleName='h1'>{props.children}</h1>
            <div className="col-md-6">
                <h2 styleName='h2' onClick={save}
                >1. Available components to drag & drop</h2>
            </div>
            <div className="col-md-6">
                <h2 styleName='h2'>3. Generated code to be copied</h2>
            </div>
        </div>
    );
};

export default CSSModules(HeaderConfigTab, styles, {allowMultiple: true});
