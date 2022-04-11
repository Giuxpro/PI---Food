import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getRecipes,filterRecipeByDiets,filterRecipeByCreatedDiets,filterByOrderName,} from "../Actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import styles from "./Home.module.css";



export default function Home() {
  const dispatch = useDispatch();

  const allRecipes = useSelector((state) => state.recipes);

  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const indexLastRecipe = currentPage * recipesPerPage;
  const indexFirstRecipe = indexLastRecipe - recipesPerPage;
  const currentRecipesList = allRecipes.slice(
    indexFirstRecipe,
    indexLastRecipe
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  function handleFilterDiets(e) {
    dispatch(filterRecipeByDiets(e.target.value));
  }

  function handleFilterRecipeByCreatedDiets(e) {
    dispatch(filterRecipeByCreatedDiets(e.target.value));
  }

  function handleFilterByOrderName(e) {
    e.preventDefault();
    dispatch(filterByOrderName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>World of Food</h1>
        </div>
        <div className={styles.search}>
            <div className={styles.pagHome}>
                <SearchBar />
            </div>
            <div className={styles.navPag}>
                <Paginado
                    recipesPerPage={recipesPerPage}
                    allRecipes={allRecipes.length}
                    paginado={paginado}
                /> 
            </div>         
        </div>
        
            <div className={styles.btnYoptions} >
                <div className={styles.crearYCargar}>
                    <Link to="/recipe">
                    <button>Crear Receta</button>
                    </Link>
                    <button onClick={(e) => {handleClick(e)}}>Cargar Recetas</button>
                </div>
                <div className={styles.selectOptions}>
                    <select onChange={(e) => handleFilterByOrderName(e)}>
                        <option value="selec1">Selecciona una Opcion</option>
                        <option value="ascendente">Ascendente</option>
                        <option value="descendente">Descendente</option>
                        <option value="puntuacion+">Mayor Puntuacion</option>
                        <option value="puntuacion-">Menor Puntuacion</option>
                    </select>
                    <select onChange={(e) => handleFilterDiets(e)}>
                        <option value="selec2">Selecciona una Opcion</option>
                        <option value="todas">Todas</option>
                        <option value="gluten free">gluten free</option>
                        <option value="dairy free">dairy free</option>
                        <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
                        <option value="vegan">vegan</option>
                        <option value="paleolithic">paleolithic</option>
                        <option value="primal">primal</option>
                        <option value="pescatarian">pescatarian</option>
                        <option value="fodmap friendly">fodmap friendly</option>
                        <option value="whole 30">whole 30</option>
                    </select>
                    <select onChange={(e) => handleFilterRecipeByCreatedDiets(e)}>
                        <option value="selec3">Selecciona una Opcion</option>
                        <option value="existentes">Existentes</option>
                        <option value="creadas">Creadas</option>
                    </select>
                </div>
            </div>
           
        <div className={styles.cards}>
          {currentRecipesList?.map((e) => {
            return (
                <div className={styles.cards} key={e.id}>
                    <Link to={`/details/${e.id}`}>
                    <Card
                        name={e.name}
                        imagen={e.img} // cambiar por e.img? e.img : e.imagen
                        diets={e.diets} //.map(e=> <div key={e.id} className={styles.diets}>{e}</div>)
                        score={e.score}
                        id={e.id}
                    />
                    </Link>
                </div>
            );
          })}
        </div>
      
    </div>
  );
}
