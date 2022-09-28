import React from "react";
import CorrespondenceHeader from "../CorrespondenceHeader";
import CorrespondenceMessages from "../CorrespondenceMessage/CorrespondenceMessage";

import styles from "./Correspondence.module.css"

function Correspondence () {
    return (
        <div className={styles.wind}>
            <CorrespondenceHeader/>
            <CorrespondenceMessages/>
            {/* <CorrespondenceInput/> */}
        </div>
    )
}

export default Correspondence