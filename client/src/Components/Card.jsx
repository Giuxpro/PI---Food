import React from "react";


export default function Card({name, imagen, diets, id}){
    return(
        <div key={id}>
            <h3>{name}</h3>
            <h5>{diets}</h5>
            <img src={imagen} alt="File Not Found" width="200px" height="250px" />
        </div>
    )
}