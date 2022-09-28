import React from "react";

import styles from "./user.module.css"

function User ({photo, name}) {
    return (
        <div className={styles.content}>
            <div className={styles.photo}>
                <img src={photo}/>
            </div>
            <p className={styles.nameUser}>{name}</p>
        </div>
    )
    
}

export default User