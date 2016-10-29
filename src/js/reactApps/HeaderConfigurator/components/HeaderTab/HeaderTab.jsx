import React from 'react';

import {HeaderCell} from 'react-header-configurator/components';
import styles from './HeaderTab.scss';

export default ({saveHeaderSettings, headerConfig, children}) => {
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
            <h1 className={styles.h1}>{children}</h1>

            <div className="col-md-6">
                <h2 className={styles.h2} onClick={save}>1. Available components to drag & drop</h2>
                <div className={styles.componentsContainer}>
                    <HeaderCell items={['My Account', 'Wishlist', 'Currency', 'Language', 'Welcome Message', 'Search',
                        'Social Icons', 'Custom Link 1', 'Custom Link 2', 'Custom Link 3', 'Custom Link 4',
                        'Custom Link 5']}/>
                </div>
            </div>

            <div className="col-md-6">
                <h2 className={styles.h2}>3. Generated code to be copied</h2>
                <div className={styles.codeContainer}>
                    <code className={styles.code}>{JSON.stringify(headerConfig)}</code>
                    <div className={styles.copy}>Click to copy</div>
                </div>
            </div>

            <div className={styles.container}>
                <h2 className={styles.h2}>2. Header - Drag & drop components in these boxes</h2>

                <p> Drag & drop the components into the next boxes. You can also sort them once they are inside the
                    boxes.</p>

                <div className={styles.header}>
                    <div className={styles.headerArea}>
                        <HeaderCell/>
                        <HeaderCell/>
                        <HeaderCell/>
                    </div>
                    <div className={styles.headerArea}>
                        <HeaderCell/>
                        <HeaderCell/>
                        <HeaderCell/>
                    </div>
                    <div className={styles.headerArea}>
                        <HeaderCell/>
                        <HeaderCell/>
                        <HeaderCell/>
                    </div>
                </div>
            </div>
        </div>
    );
};
