import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { getRecipeByName } from "../Actions";
import styles from "./SearchBar.module.css";

 
export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName]= useState("")

function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)

}

function handleSubmit(e){
    e.preventDefault()
    dispatch(getRecipeByName(name))
    //setName("")
}

    return(
        <div className={styles.pagHome} >
            <input 
             className={styles.searchInput}
            type="text" 
            placeholder="Buscar..."
            onChange={e=> handleInputChange(e)}
            />
            <button className={styles.searchBtn} type="submit" onClick={e => handleSubmit(e)}>Buscar</button>
        </div>
    )
}