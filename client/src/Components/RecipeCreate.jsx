import React, {useState,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getDietsTypes, postRecipes } from "../Actions/index"



function Validaciones(){
    
}


export default function RecipeCreate(){
    const dispatch = useDispatch();
    const history = useHistory();
    const diets = useSelector( state => state.diets)

    const [input, setInput]= useState({
        
        name:"",
        img:"",
        summary:"",
        score:"",
        healthScore:"",
        steps:"",
        diets:[],

    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    function handleCheckBox(e){
        if(e.target.checked){
            setInput({
                ...input,
                diets: [...input.diets, e.target.value]
            })
        }
        console.log(input)
    }

   
    function handleSubmit(e){
        e.preventDefault()
        console.log(input)
        dispatch(postRecipes(input))
        alert("Receta Creada Con Exito")
        setInput({
            name:"",
            img:"",
            summary:"",
            score:"",
            healthScore:"",
            steps:"",
            diets:[],
        })

        history.push("/home")
        
    }

    useEffect(()=>{
        dispatch(getDietsTypes())
    },[]);

    return(
        <div>
            <Link to="/home"><button>Atras</button></Link>
            <h1>Crea Tu Propia Reseta</h1>
{/* ################## Text type Side ####################*/}
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                    type="text" 
                    value={input.name}
                    name="name"
                    onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="img">Imagen: </label>
                    <input 
                    type="text"
                    value={input.img}
                    name="img"
                    onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="score">Score: </label>
                    <input 
                    type="text" 
                    value={input.score}
                    name="score"
                    onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="healthScore">Health Score: </label>
                    <input 
                    type="text" 
                    value={input.healthScore}
                    name="healthScore"
                    onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="summary">Summary: </label>
                    <input 
                    type="text" 
                    value={input.summary}
                    name="summary"
                    onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="steps">Instructions: </label>
                    <input 
                    type="text" 
                    value={input.steps}
                    name="steps"
                    onChange={e => handleChange(e)}
                    />
                </div>
{/* ################## Checkbox type Side ####################*/}
                <div>
                    <label>Diets Type: </label>
                    <label htmlFor="gluten free">
                        <input 
                        type="checkbox" 
                        value="gluten free"
                        name="gluten free"
                        onChange={e => handleCheckBox(e)}
                        />Gluten Free
                    </label>
                </div>
                <div>
                    
                    <label htmlFor="dairy free">
                        <input 
                        type="checkbox" 
                        value="dairy free"
                        name="dairy free"
                        onChange={e=> handleCheckBox(e)}
                        />Dairy Free
                    </label>
                </div>
                <div>
                    
                    <label htmlFor="lacto ovo vegetarian">
                        <input 
                        type="checkbox" 
                        value="lacto ovo vegetarian"
                        name="lacto ovo vegetarian"
                        onChange={e=> handleCheckBox(e)}
                        />Lacto Ovo Vegetarian
                    </label>
                </div>
                <div>
                    
                    <label htmlFor="vegan">
                        <input 
                        type="checkbox" 
                        value="vegan"
                        name="vegan"
                        onChange={e=> handleCheckBox(e)}
                        />Vegan
                    </label>
                </div>
                <div>
                    
                    <label htmlFor="paleolithic">
                        <input 
                        type="checkbox" 
                        value="paleolithic"
                        name="paleolithic"
                        onChange={e=> handleCheckBox(e)}
                        />Paleolithic
                    </label>
                </div>
                <div>
                    
                    <label htmlFor="primal">
                        <input 
                        type="checkbox" 
                        value="primal"
                        name="primal"
                        onChange={e=> handleCheckBox(e)}
                        />Primal
                    </label>
                </div>
                <div>
                    
                    <label htmlFor="pescatarian">
                        <input 
                        type="checkbox" 
                        value="pescatarian"
                        name="pescatarian"
                        onChange={e=> handleCheckBox(e)}
                        />Pescatarian
                    </label>
                </div>
                <div>
                   
                    <label htmlFor="fodmap friendly">
                        <input 
                        type="checkbox" 
                        value="fodmap friendly"
                        name="fodmap friendly"
                        onChange={e=> handleCheckBox(e)}
                        />Fodmap Friendly
                    </label>
                </div>
                <div>
                    
                    <label htmlFor="whole 30">
                        <input 
                        type="checkbox" 
                        value="whole 30"
                        name="whole 30"
                        onChange={e=> handleCheckBox(e)}
                        />Whole 30
                    </label>
                </div>
                <button type="submit">Crear</button>
            </form>
        </div>
    )
}