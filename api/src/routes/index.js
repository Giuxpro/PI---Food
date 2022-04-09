require("dotenv").config();
const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios").default;
const { API_KEY, API_KEY_2, API_KEY_3 } = process.env;
const { Recipe, Dieta } = require("../db");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => {
 try{ 
  const apiUrl = await axios.get(
   `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_2}&addRecipeInformation=true&number=15`
  );
 
  const apiInfo = await apiUrl.data.results.map((e) => {
    return {
      id: e.id,
      name: e.title,
      img: e.image,
      summary: e.summary,
      score: e.spoonacularScore,
      healthScore: e.healthScore,
      types: e.dishTypes?.map((e) => e),
      diets: e.diets?.map((e) => e),
      steps: e.analyzedInstructions[0]
        ? e.analyzedInstructions[0].steps.map((e) => e.step)
        : "Instructions not Found",
    };
  });

  return apiInfo;
}catch(error){
   return error
}
};

const getDbInfo = async () => {
  return await Recipe.findAll({
    includes: {
      model: Dieta,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllRecipeInfo = async () => {
  
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const totalInfo = typeof apiInfo !== "object"? apiInfo.concat(dbInfo): apiInfo

  return totalInfo;

};
   
router.get("/recipes", async (req, res) => {
  const name = req.query.name;

  let totalRecipes = await getAllRecipeInfo();

  if (name) {
    let recipeName = totalRecipes.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase()));
    recipeName.length
      ? res.status(200).json(recipeName)
      : res.status(404).send("Recipe Not Found");
  } else {
    if(typeof totalRecipes === "object"){
    res.status(200).send(totalRecipes);
    }
    else{
      res.status(401).send(totalRecipes)
    }
  }
});


router.get("/recipes/:id", async (req, res) => {
  const  id  = req.params.id;
    const totalRecipe = await getAllRecipeInfo()

    if(id){
      let recipeId = await totalRecipe.filter( e => e.id == id)
      console.log(id)
      recipeId.length
      ?res.status(200).json(recipeId)
      :res.status(404).send("Match not Found")
    }
});


router.get("/types", async (req, res) => {
  const dietsApi = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_2}&addRecipeInformation=true&number=15`
  );

  let diets = [];
  dietsApi.data.results.map((e) => {
    if (e.diets) {
      diets.push(e.diets);
    }
  });
  console.log(diets);

  diets.forEach((e) => {
    for (let i = 0; i < e.length; i++) {
      Dieta.findOrCreate({
        where: { name: e[i] },
      });
    }
  });

  const allDiets = await Dieta.findAll();
  res.status(200).json(allDiets);
});


router.post("/recipe", async (req, res) => {
  const { id, name, summary, score, healthScore, steps, diets, img, types } =
    req.body;

  let createRecipe = await Recipe.create({
    
    name,
    img,
    summary,
    score,
    healthScore,
    steps,
    diets,
  });

  let dietaDb = await Dieta.findAll({
    where: { name: diets },
  });
  createRecipe.addDieta(dietaDb);
  res.send('Recipe Created successfully')
});

module.exports = router;
