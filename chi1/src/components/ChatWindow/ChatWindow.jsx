import React from "react";
import ChatList from "../ChatList";

import styles from "./ChatWindow.module.css"

function ChatWindow () {
    return (
        <div className={styles.ChatWindow}>
            <ChatList/>
        </div>
        
    )
}

export default ChatWindow;