import React from "react";
import MessagItem from "../MessageItem/MessageItem";

import styles from "./BlockMsessageInterlocutor.module.css"

function MsessageInterlocutor () {
    return (
        <div className={styles.block}>
            <img src="./24 (2).svg" className={styles.photo}/>
            <div className={styles.blockMes}>
                <MessagItem text = {"Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application."}/>
                <MessagItem text = {"Can I send you files?"}/>
            </div>
        </div>
    )
    
}

export default MsessageInterlocutor