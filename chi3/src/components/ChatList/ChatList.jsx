import React from "react";
import ChatHeader from "../ChatHeader";
import Search from "../Search";
import ListAllChats from "../ListAllChats";

function ChatList () {
    return (
        <div>
            <ChatHeader/>
            <Search />
            <ListAllChats/>
        </div>
        
    )
}

export default ChatList;