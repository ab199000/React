import React from "react";

import styles from "./Search.module.css"

function Search () {
    return (
        <div className={styles.Search}>
            <button className={styles.btnSearch}>
                <img src="./search.svg" alt="" />
            </button>
            <input className={styles.SearchInput} type="text" placeholder="Search"/>
        </div>
    )
}

export default Search;