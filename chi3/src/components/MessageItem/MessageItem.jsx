import React from "react";
import styles from "./MessageItem.module.css"

function MessagItem ({text}) {
    return(
        <div className={styles.mes}>
            <p className={styles.text}>
                {text}
            </p>
            <button className={styles.btnHorizontal}>
                <img src="./more-horizontal.svg" alt="" />
            </button>
        </div>
    )
    
}

export default MessagItem