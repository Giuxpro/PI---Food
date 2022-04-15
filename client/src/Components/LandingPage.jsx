import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css"


export default function LandingPage(){

    return(
        <div className={styles.landingPage} >
            <div className={styles.imgLan}>
            <h1>Welcome To World of Food</h1>
            <Link to="/home">
                <button className={styles.landingBtn}>Ingresar</button>
            </Link>
            </div>
        </div>
    )
}