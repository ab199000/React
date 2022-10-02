import React from "react";
import ChatInfor from "../ChatInfor";

import styles from "./Correspondence.module.css"

function CorrespondenceHeader () {
    return(
        <div className={styles.header}>
            <ChatInfor icon = {"./24 (2).svg"} name = {"Nika Jerrardo"} status = {"last online 5 hours ago"} timeLastMessege = {""}/>
            <div className={styles.buttons}>
                <button className={styles.btn}>
                    <img src="./attach-2.svg"/>
                </button>
                <button className={styles.btn}>
                    <img src="./more-vertical.svg"/>
                </button>
            </div>
        </div>
    )
}

export default CorrespondenceHeader

