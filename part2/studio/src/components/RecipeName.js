import recipedata from "./recipe.json";

function RecipeName() {

  let RecipeName = recipedata.map(recipe => {
    return <h1 key={recipe.name}>{recipe.name}</h1>
  })
  return (
    <div>
      {RecipeName}
    </div>
  );
}

export default RecipeName;

//import return the name of the recipe as a level 1 header