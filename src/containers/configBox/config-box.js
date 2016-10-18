import React from 'react';
import styles from 'styles/components/configBox/config-box.scss';
import CSSModules from 'react-css-modules';

class ConfigBox extends React.Component {
    render() {
        return (
            <div styleName='background'>
                <div className='container' styleName='base'>
                    <h1 styleName='h1'>Header Configuration</h1>
                </div>
            </div>
        );
    }
}

export default CSSModules(ConfigBox, styles, {allowMultiple: true});
