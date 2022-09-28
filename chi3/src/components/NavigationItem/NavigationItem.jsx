import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import styles from "./NavigationItem.module.css"

function NavigationItam ({href, label, icon}) {
    return (
        <NavLink to ={href} 
        className = {({isActive}) => isActive ? styles.itemActive : styles.item}>
            <img src={icon}/> {label}
        </NavLink>
    )
    
}

export default NavigationItam;