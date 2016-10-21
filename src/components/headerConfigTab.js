import React from 'react';
import styles from 'styles/components/configBox/config-box.scss';
import CSSModules from 'react-css-modules';

const HeaderConfigTab = function (props) {
    const buildConfig = (data) => {
        const componentName = Object.keys(data)[0];
        const properties = data[componentName];
        let newSettings = {};

        newSettings[componentName] = {
            ...props.headerConfig[componentName],
            ...properties
        };

        return {...props.headerConfig, ...newSettings};
    };

    const save = () => {
        let data = {
            MyAccount: {
                mobile: {
                    position: 'TopRight',
                    order: 2
                }
            }
        };

        props.saveHeaderSettings(buildConfig(data));
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
