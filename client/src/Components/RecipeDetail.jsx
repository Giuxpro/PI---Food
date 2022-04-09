import React from "react";
import { Link,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../Actions";
import { useEffect } from "react";


export default function Details(){
     const dispatch = useDispatch();
     let {id} = useParams()

     const myRecipe = useSelector(state => state.detail)
     console.log(myRecipe)
     console.log(id)
     useEffect(()=>{
         dispatch(getDetails(id));
     },[dispatch,id]) 

     

     return(
         <div>
             {
                 myRecipe.length > 0
                 ?<div key={id}>
                     <h1>{myRecipe[0].name}</h1>
                     <img src={myRecipe[0].img? myRecipe[0].img: myRecipe[0].image} alt="Not Found" />
                     <h2>{myRecipe[0].spoonacularScore}</h2>
                     <h2>{myRecipe[0].healthScore}</h2>
                     <h3>{myRecipe[0].createdInDb? myRecipe[0].diets+ " ": myRecipe[0].diets?.map(e => e + (" "))}</h3>
                     <h3>{myRecipe[0].summary}</h3>
                     {/* <h3>{myRecipe[0].analyzedInstructions[0].steps.map(e => e.step)}</h3> */}
                 </div>
                  :<p>Loading...</p>
             }
             <Link to= "/home">
                 <button>volver</button>
             </Link>
         </div>
     )
}