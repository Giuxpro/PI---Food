import React from "react";
import styles from "./Card.module.css"

export default function Card({name, imagen, diets, id}){
    return(
        <div className={styles.cardsComponent} key={id}>
           <div>
                <img className={styles.img} src={imagen} alt="File Not Found" width="150px" height="150px" />
                <h3 className={styles.h3Name} >{name}</h3>
                <h5 className={styles.h5Name} >{diets}</h5>
            </div>  
        </div>
    )
}