

const initialState={
    recipes: [],
    backUpRecipes:[],
    diets: [],
    detail:[],
  
}


function rootReducer(state = initialState, action ){
    switch(action.type){
        case "GET_RECIPES":
            return{
                ...state,
                recipes: action.payload,
                backUpRecipes:action.payload
            }
        case "GET_RECIPE_NAME":
            return {
                ...state,
                recipes: action.payload
            }
        case "GET_TYPE_RECIPE":
            return{
                ...state,
                diets: action.payload
            }
        case "POST_RECIPE":
            return{
                ...state,
            }
        case "FILTER_BY_DIETS":
            
            const allRecipes = state.backUpRecipes
            const filteredDiets = action.payload === "todas"? allRecipes : allRecipes.filter(e => e.diets.includes(action.payload) )
            return{
                ...state,
                recipes: filteredDiets,
                // res: console.log(filteredDiets)
            }
        case "FILTER_CREATED_DIETS":
            const allRecipes2 = state.backUpRecipes
            const createdDiets = action.payload === "creadas"? allRecipes2.filter(e => e.createInDb) : allRecipes2.filter(e => !e.createInDb)
            return{
                ...state,
                recipes: createdDiets
            }
        case "FILTER_ORDER_NAME":
    
            let sortName = action.payload;

            sortName === "ascendente"
            ? state.recipes.sort((a,b)=>{
                if(a.name > b.name){
                    return 1;
                }
                if(a.name < b.name){
                    return -1;
                }
                
                    return 0;
                
            }):sortName === "descendente"
             ? state.recipes.sort((a,b)=>{
                if(a.name > b.name){
                    return -1;
                }
                if(a.name < b.name){
                    return 1;
                }
                
                    return 0;
                
            }):sortName === "puntuacion+"
            ? state.recipes.sort((a,b)=>{
                if(a.score > b.score){
                    return -1;
                }
                if(a.score < b.score){
                    return 1
                }
                
                    return 0; 
           
            }): state.recipes.sort((a,b)=>{
                if(a.score > b.score){
                    return 1;
                }
                if(a.score < b.score){
                    return -1;
                }
                
                    return 0;
                  
             })
        // eslint-disable-next-line no-fallthrough
        case "GET_DETAILS":
            return{
                ...state,
                detail: action.payload
            }
                
        default:return state;
    }
}


export default rootReducer;