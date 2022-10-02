import React from "react";
import CorrespondenceHeader from "../CorrespondenceHeader";
import CorrespondenceMessages from "../CorrespondenceMessage/CorrespondenceMessage";
import MassageBlock from "../MassageBlock";

import styles from "./Correspondence.module.css"

function Correspondence () {
    return (
        <div className={styles.wind}>
            <CorrespondenceHeader/>
            <CorrespondenceMessages/>
            <MassageBlock/>
        </div>
    )
}

export default Correspondence