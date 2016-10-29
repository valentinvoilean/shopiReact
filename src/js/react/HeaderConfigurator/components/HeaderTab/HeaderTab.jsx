import React from 'react';
import styles from './HeaderTab.scss';
import CSSModules from 'react-css-modules';

import HeaderCell from 'react-header-configurator/components';

const HeaderTab = function ({saveHeaderSettings, headerConfig, children}) {
    const save = () => {
        let data = {
            MyAccount: {
                mobile: {
                    position: 'TopRight',
                    order: 2
                }
            }
        };

        saveHeaderSettings(data);
    };

    return (
        <div>
            <h1 styleName="h1">{children}</h1>

            <div className="col-md-6">
                <h2 styleName="h2" onClick={save}>1. Available components to drag & drop</h2>
                <div styleName="componentsContainer">
                    <HeaderCell items={['My Account', 'Wishlist', 'Currency', 'Language', 'Welcome Message', 'Search',
                        'Social Icons', 'Custom Link 1', 'Custom Link 2', 'Custom Link 3', 'Custom Link 4',
                        'Custom Link 5']}/>
                </div>
            </div>

            <div className="col-md-6">
                <h2 styleName="h2">3. Generated code to be copied</h2>
                <div styleName="codeContainer">
                    <code styleName="code">{JSON.stringify(headerConfig)}</code>
                    <div styleName="copy">Click to copy</div>
                </div>
            </div>

            <div styleName="container">
                <h2 styleName="h2">2. Header - Drag & drop components in these boxes</h2>

                <p> Drag & drop the components into the next boxes. You can also sort them once they are inside the
                    boxes.</p>

                <div styleName="header">
                    <div styleName="headerArea">
                        <HeaderCell/>
                        <HeaderCell/>
                        <HeaderCell/>
                    </div>
                    <div styleName="headerArea">
                        <HeaderCell/>
                        <HeaderCell/>
                        <HeaderCell/>
                    </div>
                    <div styleName="headerArea">
                        <HeaderCell/>
                        <HeaderCell/>
                        <HeaderCell/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CSSModules(HeaderTab, styles, {allowMultiple: true});
