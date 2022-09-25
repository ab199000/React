import React from "react";
import styles from "./Indication.module.css"

function Indication ({indication}) {
    return (
        <p className={styles.indication}>{indication}</p>
    )
}

export default Indication