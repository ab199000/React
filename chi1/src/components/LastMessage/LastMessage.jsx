import React from "react";


import styles from "./LastMessage.module.css"

function LastMessage ({lastMessege}) {
    return(
            <p className={styles.messageBlock}>{lastMessege}</p>
    )
}

export default LastMessage