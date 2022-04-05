import React from "react";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getRecipes } from "../Actions";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function Home(){

const dispatch = useDispatch()

const allRecipes = useSelector (state => state.recipes)

useEffect(()=>{
    dispatch(getRecipes());
},[dispatch])

function handleClick(e){
    e.preventDefault();
    dispatch(getRecipes());
}

    return(
        <div>
            <Link to="/recipe">Crear Receta</Link>
            <h1>World of Food</h1>
            <button onClick={e => handleClick(e)}>Cargar Recetas</button>
            <div>
                <select>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                    <option value="puntos">Puntuacion</option>
                </select>
                <select >
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                    <option value="4"></option>
                    <option value="5"></option>
                    <option value="6"></option>
                    <option value="7"></option>
                    <option value="8"></option>
                    <option value="9"></option>
                </select>
                <select>
                    <option value="">Todas</option>
                    <option value="">Creadas</option>
                    <option value="">Existentes</option>
                </select>
            {   
                
                allRecipes?.map( e =>{
                    return(
                      <div className="Cards">
                        <Link to={"/home/"+ e.id}>
                            <Card 
                            key={e.id}
                            name={e.name}
                            imagen={e.imagen}
                            diets={e.diets}
                            />
                        </Link>
                      </div>
                    )
                })
                
            }
            </div>
        </div>
    )

}