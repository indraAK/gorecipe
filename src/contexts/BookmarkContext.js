import { createContext, useReducer, useEffect } from "react";

const BookmarkContext = createContext();

const recipeIsSaved = (key, recipes) => {
  return recipes.some((recipe) => recipe.key === key);
};

const reducer = (recipes, action) => {
  switch (action.type) {
    case "TOGGLE_SAVE":
      let newRecipes = [...recipes];
      if (!recipeIsSaved(action.key, recipes)) {
        newRecipes.push(action.payload);
      } else {
        newRecipes = recipes.filter((recipe) => recipe.key !== action.key);
      }
      return newRecipes;
    default:
      return recipes;
  }
};

const BookmarkContextProvider = (props) => {
  const [recipes, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem("recipes");

    return localData ? JSON.parse(localData) : [];
  });
  const isSaved = (key) => {
    return recipeIsSaved(key, recipes);
  };

  // simpan data recipe ke localStorage
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  return (
    <BookmarkContext.Provider value={{ recipes, dispatch, isSaved }}>
      {props.children}
    </BookmarkContext.Provider>
  );
};

export { BookmarkContext, BookmarkContextProvider };
