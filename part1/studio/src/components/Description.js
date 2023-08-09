import styles from './Description.modules.css';
import {Component} from 'react';

let recipeTitle = "The best recipe for Garba";
let shortRecipeDescpription = "Garba is a way to eat attiéké! So the garba is simply attiéké served with salted tuna and then fried.Le garba est une manière de manger l’attiéké! Du coup le garba c’est tout simplement l’attiéké servie avec du thon salé puis frit.";

 const RecipeAuthor = () => {
    let authorLink = "https://kelianfood.com/la-meilleure-recette-du-garba/";
    let authorPhoto = "https://kelianfood.com/wp-content/uploads/2023/03/moi--370x494.jpg";
    let authorName = "viviane";
   return (
   <div className = {styles.recipeAuthorBlock}>
      <img
       src={authorPhoto}
       alt = {authorName} 
       className={styles.imageUpdates}
       />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Keliane Food</a> 
      </div>
   </div>
); 
}

class RecipeDescription extends Component {
   render () {
      return [
   <div> 
      <div>
         <h1>{recipeTitle}</h1>
         <p>{shortRecipeDescpription}</p>
      </div>
      <RecipeAuthor />
   </div>
      ];
   }

}


export default RecipeDescription; 