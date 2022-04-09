import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../Actions";
import { useEffect } from "react";


export default function Details(props){
     const dispatch = useDispatch();
console.log(props)
     useEffect(()=>{
         dispatch(getDetails(props.match.params.id));
     },[dispatch, props.match.params.id]) //###### modificar en caso contrario solo poniendo dispatch

     const myRecipe = useSelector(state => state.detail)

     return(
         <div>
             {
                 myRecipe.length > 0
                 ?<div>
                     <h1>{myRecipe[0].name}</h1>
                     <img src={myRecipe[0].img? myRecipe[0].img: myRecipe[0].image} alt="Not Found" />
                     <h2>{myRecipe[0].spoonacularScore}</h2>
                     <h2>{myRecipe[0].healthScore}</h2>
                     <h3>{myRecipe[0].createdInDb? myRecipe[0].diets+ " ": myRecipe[0].diets?.map(e => e + (" "))}</h3>
                     <h3>{myRecipe[0].summary}</h3>
                     <h3>{myRecipe[0].analyzedInstructions[0].steps.map(e => e.step)}</h3>
                 </div>
                  :<p>Loading...</p>
             }
             <Link to= "/home">
                 <button>volver</button>
             </Link>
         </div>
     )
}