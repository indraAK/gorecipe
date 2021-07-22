import { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { BiBarChartAlt, BiDish, BiTime, BiCheck } from "react-icons/bi";
import { BookmarkContext } from "../contexts/BookmarkContext";

const RecipeCard = ({ recipe }) => {
  const { dispatch, isSaved } = useContext(BookmarkContext);
  const routeMatch = useRouteMatch("/bookmark");

  return (
    <li>
      <div className="recipe recipe-card">
        <img src={recipe.thumb} alt="" />
        <div className="recipe-body">
          <Link
            to={`/recipe/${recipe.key}`}
            className="recipe-title recipe-link"
          >
            {recipe.title}
          </Link>
          <div className="recipe-info">
            <div className="icon-group">
              <BiBarChartAlt className="icon" />
              <p>{recipe.dificulty ? recipe.dificulty : recipe.difficulty}</p>
            </div>
            <div className="icon-group">
              <BiDish className="icon" />
              <p>
                {recipe.portion && recipe.portion}
                {recipe.serving && recipe.serving}
                {recipe.servings && recipe.servings}
              </p>
            </div>
            <div className="icon-group">
              <BiTime className="icon" />
              <p>{recipe.times}</p>
            </div>
          </div>
          {routeMatch && (
            <button
              className="btn btn-primary"
              style={{ marginTop: "4rem" }}
              onClick={() => dispatch({ type: "TOGGLE_SAVE", key: recipe.key })}
            >
              {isSaved(recipe.key) ? (
                <span style={{ display: "flex", alignItems: "center" }}>
                  <BiCheck fontSize="20px" style={{ marginRight: "5px" }} />{" "}
                  Disimpan
                </span>
              ) : (
                <span>Simpan Resep</span>
              )}
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default RecipeCard;
