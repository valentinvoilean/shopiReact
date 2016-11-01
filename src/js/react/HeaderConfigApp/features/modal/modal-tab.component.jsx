import React from 'react';

import ModalCell from './modal-cell.component.jsx';
import styles from './modal.scss';

export default (props) => {
    const {save, remove, headerConfig, mediaQuery} = props;

    const items = headerConfig[mediaQuery];

    const showTopHeader = () => {
        if (mediaQuery !== 'mobile') {
            return (
                <div className={styles.headerArea}>
                    <ModalCell
                        save={save}
                        remove={remove}
                        mediaQuery={mediaQuery}
                        name="TopLeft"
                        items={items}/>
                    <ModalCell
                        save={save}
                        remove={remove}
                        mediaQuery={mediaQuery}
                        name="TopCenter"
                        items={items}/>
                    <ModalCell
                        save={save}
                        remove={remove}
                        mediaQuery={mediaQuery}
                        name="TopRight"
                        items={items}/>
                </div>
            );
        }
    };

    return (
        <div>
            <div className="col-md-6">
                <h2 className={styles.h2}>1. Available components to drag & drop</h2>
                <div className={styles.componentsContainer}>
                    <ModalCell
                        save={save}
                        remove={remove}
                        mediaQuery={mediaQuery}
                        name="Hidden"
                        items={items}/>
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
                        <ModalCell
                            save={save}
                            remove={remove}
                            mediaQuery={mediaQuery}
                            name="MainLeft"
                            items={items}/>
                        <ModalCell
                            save={save}
                            remove={remove}
                            mediaQuery={mediaQuery}
                            name="MainCenter"
                            items={items}/>
                        <ModalCell
                            save={save}
                            remove={remove}
                            mediaQuery={mediaQuery}
                            name="MainRight"
                            items={items}/>
                    </div>
                    <div className={styles.headerArea}>
                        <ModalCell
                            save={save}
                            remove={remove}
                            mediaQuery={mediaQuery}
                            name="BottomLeft"
                            items={items}/>
                        <ModalCell
                            save={save}
                            remove={remove}
                            mediaQuery={mediaQuery}
                            name="BottomCenter"
                            items={items}/>
                        <ModalCell
                            save={save}
                            remove={remove}
                            mediaQuery={mediaQuery}
                            name="BottomRight"
                            items={items}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
