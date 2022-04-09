import axios from "axios";

export function getRecipes(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/recipes");
        return dispatch({
            type:"GET_RECIPES",
            payload: json.data
        })
    }
}

export function getRecipeByName(name){
    return async function(dispatch){
        try{
            var json = await axios.get(`http://localhost:3001/recipes?name=${name}`);
            return dispatch({
                type: "GET_RECIPE_NAME",
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export function getDietsTypes(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/types")
        return dispatch({
            type:"GET_TYPE_RECIPE",
            payload: json.data
        })
    }
}

export function postRecipes(payload){
    return async function(dispatch){
        const json = await axios.post("http://localhost:3001/recipe", payload);
        console.log(json)
        return json
        // dispatch({
        //     type:"POST_RECIPE",
        //     payload: json.data
        // })
    }
}


export function filterRecipeByDiets(payload){
    console.log(payload)
    return{
        type: "FILTER_BY_DIETS",
        payload: payload
    }
}

export function filterRecipeByCreatedDiets(payload){
    return{
        type: "FILTER_CREATED_DIETS",
        payload: payload
    }
}

export function filterByOrderName(payload){
    return{
        type: "FILTER_ORDER_NAME",
        payload:payload
    }
}

export function getDetails(id){
    return async function(dispatch){
        try{
            const json = await axios.get(`http://localhost:3001/recipes${id}`);
            return dispatch({
                type: "GET_DETAILS",
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}
