import React from "react";
import ChatList from "../ChatList";
import Correspondence from "../Correspondence";

import styles from "./ChatWindow.module.css"

function ChatWindow () {
    return (
        <div className={styles.ChatWindow}>
            <ChatList/>
            <Correspondence/>
        </div>
        
    )
}

export default ChatWindow;