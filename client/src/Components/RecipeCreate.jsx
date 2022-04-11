import React, {useState,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getDietsTypes, postRecipes } from "../Actions/index"



function Validaciones(input){
    let errors = {};
    
    let regexName = /^\b[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    let regexScore =/^[1-9]?[0-9]{1}$|^100$/;
    let regexHealthScore = /^[1-9]?[0-9]{1}$|^100$/;
    let regexSummary =/^[A-Za-z0-9_-]+$/
    let regexSteps =/^[A-Za-z0-9_-]+$/

    if(!regexName.test(input.name)){
        errors.name = "Se requiere un Nombre";
    }
    else if(!regexScore.test(input.score)){
        errors.score = "Debe ingresar el puntaje"
    }
    else if(!regexHealthScore.test(input.healthScore)){
        errors.healthScore = "Debe ingresar un puntaje"
    }
    else if(!regexSummary.test(input.summary)){
    errors.summary = "Debe ingresar un texto descriptivo para la Receta"
    }
    else if(!regexSteps.test(input.steps)){
    errors.steps = "Debe ingresar un texto para la Receta"
    }


    return errors;
}


export default function RecipeCreate(){
    const dispatch = useDispatch();
    const history = useHistory();
    // const diets = useSelector( state => state.diets)
    const [errors, setErrors] = useState({})
     const [btnAct, setBtnAct] = useState(true)
    

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
        setErrors(Validaciones({
            ...input,
            [e.target.name]: e.target.value
        }))
        // if(errors.name && 
        //     errors.img && 
        //     errors.score && 
        //     errors.summary && 
        //     errors.healthScore && 
        //     errors.steps &&
        //     errors.diets){
        //     setBtnAct(false) 
        //     }
        //     else{
        //     setBtnAct(true)
        //     }
        
        
          
        console.log(input)
    }

    
    function handleCheckBox(e){
        if(e.target.checked){
            setInput({
                ...input,
                diets: [...input.diets, e.target.value]
            })
          setErrors(Validaciones({
              ...input,
              [e.target.name]: e.target.value
          }))
          if(errors){
            setBtnAct(false) 
            }
          else if(errors){
            setBtnAct(true)
            }
         
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
            diets:"",
        })

        
        history.push("/home")
        
        
    }



    useEffect(()=>{
        dispatch(getDietsTypes())
    },[]);

    return(
        <div>
            <Link to="/home"><button>Atras</button></Link>
            <h1>Crea Tu Propia Receta</h1>
{/* ################## Text type Side ####################*/}
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                    type="text" 
                    value={input.name}
                    name="name"
                    placeholder="Ingrese su Nombre..."
                    onChange={e => handleChange(e)}
                  
                    />
                    {
                        errors.name && <p>{errors.name}</p>
                    }
                </div>
                <div>
                    <label htmlFor="img">Imagen: </label>
                    <input 
                    type="text"
                    value={input.img}
                    name="img"
                    placeholder="Ingrese el Url de la imagen..."
                    onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="score">Score: </label>
                    <input 
                    type="text" 
                    value={input.score}
                    name="score"
                    placeholder="Ingrese un puntaje...(0-100)"
                    onChange={e => handleChange(e)}
                    />
                    {
                        errors.score && <p>{errors.score}</p>
                    }
                </div>
                <div>
                    <label htmlFor="healthScore">Health Score: </label>
                    <input 
                    type="text" 
                    value={input.healthScore}
                    name="healthScore"
                    placeholder="Ingrese el puntaje de nivel saludable...(0-100)"
                    onChange={e => handleChange(e)}
                    />
                    {
                        errors.healthScore && <p>{errors.healthScore}</p>
                    }
                </div>
                <div>
                    <label htmlFor="summary">Summary: </label>
                    <input 
                    type="text" 
                    value={input.summary}
                    name="summary"
                    placeholder="Ingrese un Resumen descriptivo para la Receta..."
                    onChange={e => handleChange(e)}
                    />
                    {
                        errors.summary && <p>{errors.summary}</p>
                    }
                </div>
                <div>
                    <label htmlFor="steps">Instructions: </label>
                    <input 
                    type="text" 
                    value={input.steps}
                    name="steps"
                    placeholder="Ingrese los pasos para preparar la Receta..."
                    onChange={e => handleChange(e)}
                    />
                    {
                        errors.steps && <p>{errors.steps}</p>
                    }
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
              
                { /* <div>
                   {
                    errors.name ||
                    errors.img ||
                    errors.summary ||
                    errors.score ||
                    errors.healthScore ||
                    errors.steps  ||
                    errors.diets
                    ?<button className="btn" >Crear</button>
                    :<button className="btn" disabled={btnAct} type="submit"onChange={e => handleChange(e)}>Crear</button>
                }
                </div> */}
<button className="btn" type="submit" disabled={btnAct}>Crear</button>
            </form>
        </div>
    )
}