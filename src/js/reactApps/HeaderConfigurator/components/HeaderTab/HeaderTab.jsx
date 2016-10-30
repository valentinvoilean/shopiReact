import React from 'react';

import {HeaderCell} from 'react-header-configurator/components';
import styles from './HeaderTab.scss';
import {distributeItemsByMQ} from './HeaderTab.util';

export default ({saveHeaderSettings, headerConfig, filter, children}) => {
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

    let items = distributeItemsByMQ(headerConfig, filter);

    let showTopHeader = () => {
        if (filter !== 'mobile') {
            return (
                <div className={styles.headerArea}>
                    <HeaderCell items={items.TopLeft}/>
                    <HeaderCell items={items.TopCenter}/>
                    <HeaderCell items={items.TopRight}/>
                </div>
            );
        }
    };

    return (
        <div>
            <h1 className={styles.h1}>{children}</h1>

            <div className="col-md-6">
                <h2 className={styles.h2} onClick={save}>1. Available components to drag & drop</h2>
                <div className={styles.componentsContainer}>
                    <HeaderCell items={items.Menu}/>
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
                    {showTopHeader()}
                    <div className={styles.headerArea}>
                        <HeaderCell items={items.MainLeft}/>
                        <HeaderCell items={items.MainCenter}/>
                        <HeaderCell items={items.MainRight}/>
                    </div>
                    <div className={styles.headerArea}>
                        <HeaderCell items={items.BottomLeft}/>
                        <HeaderCell items={items.BottomCenter}/>
                        <HeaderCell items={items.BottomRight}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
