import React from "react";
import styles from "./Paginado.module.css"


export default function Paginado({recipesPerPage, allRecipes, paginado}){
    const pageNumbers = []

    for(let i = 0; i < Math.ceil(allRecipes/recipesPerPage); i++){
        pageNumbers.push(i+1)
    }
    return(
        
        <nav >
            <ul className={styles.paginado}>
                {
                    pageNumbers && pageNumbers.map(pag =>(
                        <li key={pag}>
                            <button onClick={()=> {paginado(pag)}}>{pag}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
        
    )
}