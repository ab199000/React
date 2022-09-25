import React from "react";

import styles from "./ChatListLetter.module.css"

function ChatTimelastLetter ({timeLastMessege}) {
    return (
        <p className={styles.time}>{timeLastMessege}</p>
    )
}

export default ChatTimelastLetter