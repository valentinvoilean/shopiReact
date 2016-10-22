import React from 'react';
import styles from 'styles/components/configBox/config-box.scss';
import CSSModules from 'react-css-modules';

import HeaderCell from 'components/headerConfigCell.js';

const HeaderConfigTab = function (props) {
    const save = () => {
        let data = {
            MyAccount: {
                mobile: {
                    position: 'TopRight',
                    order: 2
                }
            }
        };

        props.saveHeaderSettings(data);
    };

    return (
        <div>
            <h1 styleName="h1">{props.children}</h1>

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
                    <code styleName="code">{JSON.stringify(props.headerConfig)}</code>
                    <div styleName="copy">Click to copy</div>
                </div>
            </div>

            <div styleName="container">
                <h2 styleName="h2">2. Header - Drag & drop components in these boxes</h2>

                <p>
                    Drag & drop the components into the next boxes. You can also sort them once they are inside the
                    boxes.<br/>
                    The center columns are optional. Can be removed it by pressing the <span styleName="plus">+</span>
                    button and add it back by pressing the <span styleName="close">&#10005;</span> button.
                </p>

                <table styleName="header">
                    <tbody>
                    <tr>
                        <td><span>Top Left</span></td>
                        <td><span>Top Center</span></td>
                        <td><span>Top Right</span></td>
                    </tr>
                    <tr>
                        <td><span>Main Left</span></td>
                        <td><span>Main Center</span></td>
                        <td><span>Main Right</span></td>
                    </tr>
                    <tr>
                        <td><span>Bottom Left</span></td>
                        <td><span>Bottom Center</span></td>
                        <td><span>Bottom Right</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CSSModules(HeaderConfigTab, styles, {allowMultiple: true});
