import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <ul className="recipe-list">
      {recipes.map((recipe, idx) => (
        <RecipeCard recipe={recipe} key={idx} />
      ))}
    </ul>
  );
};

export default RecipeList;
