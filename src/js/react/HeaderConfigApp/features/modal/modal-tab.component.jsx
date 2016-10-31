import React from 'react';

import ModalCell from './modal-cell.component.jsx';
import styles from './modal.scss';

export default ({saveHeaderSettings, headerConfig, mediaQuery, children}) => {
    let items = headerConfig[mediaQuery];

    let onChange = (items, sortable) => {
        const item = sortable.el.className;
        let newState = {};

        newState[mediaQuery] = {};
        newState[mediaQuery][item] = items;

        saveHeaderSettings(newState);
    };

    let showTopHeader = () => {
        if (mediaQuery !== 'mobile') {
            return (
                <div className={styles.headerArea}>
                    <ModalCell onChange={onChange} name="TopLeft" items={items.TopLeft}/>
                    <ModalCell onChange={onChange} name="TopCenter" items={items.TopCenter}/>
                    <ModalCell onChange={onChange} name="TopRight" items={items.TopRight}/>
                </div>
            );
        }
    };

    return (
        <div>
            <h1 className={styles.h1}>{children}</h1>

            <div className="col-md-6">
                <h2 className={styles.h2}>1. Available components to drag & drop</h2>
                <div className={styles.componentsContainer}>
                    <ModalCell onChange={onChange} name="Menu" items={items.Menu}/>
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
                        <ModalCell onChange={onChange} name="MainLeft" items={items.MainLeft}/>
                        <ModalCell onChange={onChange} name="MainCenter" items={items.MainCenter}/>
                        <ModalCell onChange={onChange} name="MainRight" items={items.MainRight}/>
                    </div>
                    <div className={styles.headerArea}>
                        <ModalCell onChange={onChange} name="BottomLeft" items={items.BottomLeft}/>
                        <ModalCell onChange={onChange} name="BottomCenter" items={items.BottomCenter}/>
                        <ModalCell onChange={onChange} name="BottomRight" items={items.BottomRight}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
