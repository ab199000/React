import React from "react";

import styles from "./MassageBlock.module.css"

function MassageBlock () {
    return (
        <div className={styles.MassageBlock}>
            <button className={styles.btnBlock}>
                <img src="./plus.svg"/>
            </button>
            <input type="text" placeholder="Type a message here" className={styles.inp}/>
            <button className={styles.smile}>
                <img src="./Smile icon.svg"/>
            </button>
            <button className={styles.btnBlock}>
                <img src="./navigation-2.svg"/>
            </button>
        </div>
    )
}

export default MassageBlock