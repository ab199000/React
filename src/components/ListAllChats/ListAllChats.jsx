import React from "react";
import Chat from "../Chat";
import styles from "./ListAllChats.module.css"

let arr = [
    {href: "/c1", icon: "./24.svg", name: "Luy Robin", status: "writes", timeLastMessege: "1 minute ago", lastMessege: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). ",objects: [], indication: "1"},
    {href: "/c2", icon: "./24 (1).svg", name: "Jared Sunn", status: "recods voice message", timeLastMessege: "1 minute ago", lastMessege: "Voice message (01:15) ", objects: [{type:"File", img:"./file-text.svg"},{type:"File", img:"./file-text.svg", kol:2},{type:"Photo", img:"./imageF.svg",kol:1}], indication: "1"},
    {href: "/c3", icon: "./24 (2).svg", name: "Nika Jerrardo", status: "last online 5 hours ago", timeLastMessege: "3 days ago", lastMessege: "Cicero famously orated against his political opponent Lucius Sergius Catilina.", objects: [], indication: ""},
    {href: "/c4", icon: "./24 (3).svg", name: "David Amrosa", status: "last online 5 hours ago", timeLastMessege: "3 days ago", lastMessege: "", objects: [], indication: ""},

]

function ListAllChats () {
    return (
        <ul className={styles.list}>
            {/* {arr.map(({href, icon, name, status, timeLastMessege, lastMessege, objects, indication})=>(
                <li key={href} className={styles.blockChat}>
                    <Chat href = {href} icon = {icon} name ={name} status = {status} timeLastMessege ={timeLastMessege} lastMessege = {lastMessege} objects = {objects} indication = {indication}/>
                </li>
            ))} */}

                <li key="/c1" className={styles.blockChat}>
                    <Chat href = "/c1" icon = "./24.svg" name ="Luy Robin" status = "writes" timeLastMessege ="1 minute ago" lastMessege = {arr[0].lastMessege} indication = {1}/>
                </li>
                <li key="/c2" className={styles.blockChat}>
                    <Chat href = "/c2" icon = "./24 (1).svg" name ="Jared Sunn" status = "recods voice message" timeLastMessege ="1 minute ago" lastMessege = {arr[1].lastMessege} indication = {1}/>
                </li>
                <li key="/c3" className={styles.blockChat}>
                    <Chat href = "/c3" icon = "./24 (2).svg" name ="Nika Jerrardo" status = "last online 5 hours ago" timeLastMessege ="3 days ago" lastMessege = {arr[2].lastMessege} indication = {0}/>
                </li>
                <li key="/c4" className={styles.blockChat}>
                    <Chat href = "/c4" icon = "./24 (3).svg" name ="David Amrosa" status = "last online 5 hours ago" timeLastMessege ="3 days ago" lastMessege = {arr[3].lastMessege} indication = {0}/>
                </li>
        </ul>
    )
}

export default ListAllChats