import React from 'react';

import {HeaderCell} from 'react-header-configurator/components';
import styles from './HeaderTab.scss';

export default ({saveHeaderSettings, headerConfig, mediaQuery, children}) => {
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

    let items = headerConfig[mediaQuery];

    let onChange = (items, sortable, evt) => {
        console.log(items, sortable, evt);
    };

    let onEnd = () => {
        console.log('ended');
    };

    let showTopHeader = () => {
        if (mediaQuery !== 'mobile') {
            return (
                <div className={styles.headerArea}>
                    <HeaderCell onChange={onChange} onEnd={onEnd} name="TopLeft" items={items.TopLeft}/>
                    <HeaderCell onChange={onChange} onEnd={onEnd} name="TopCenter" items={items.TopCenter}/>
                    <HeaderCell onChange={onChange} onEnd={onEnd} name="TopRight" items={items.TopRight}/>
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
                    <HeaderCell onChange={onChange} onEnd={onEnd} name="Menu" items={items.Menu}/>
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
                        <HeaderCell onChange={onChange} onEnd={onEnd} name="MainLeft" items={items.MainLeft}/>
                        <HeaderCell onChange={onChange} onEnd={onEnd} name="MainCenter" items={items.MainCenter}/>
                        <HeaderCell onChange={onChange} onEnd={onEnd} name="MainRight" items={items.MainRight}/>
                    </div>
                    <div className={styles.headerArea}>
                        <HeaderCell onChange={onChange} onEnd={onEnd} name="BottomLeft" items={items.BottomLeft}/>
                        <HeaderCell onChange={onChange} onEnd={onEnd} name="BottomCenter" items={items.BottomCenter}/>
                        <HeaderCell onChange={onChange} onEnd={onEnd} name="BottomRight" items={items.BottomRight}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
