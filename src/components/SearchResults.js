import React, { useRef, useMemo } from "react";
import useAxios from "./useAxios";
import RecipeList from "./RecipeList";

const SearchResults = ({ keyword }) => {
  const PROXY_URL = "https://cors.bridged.cc/";
  const searchResultsRef = useRef();
  const {
    data: recipes,
    isLoading,
    error,
  } = useAxios(
    PROXY_URL +
      `https://masak-apa.tomorisakura.vercel.app/api/search/?q=${keyword}`
  );

  useMemo(() => {
    if (keyword && recipes) {
      const offsetTop = searchResultsRef.current.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  }, [keyword, recipes]);

  return (
    <section className="recipes recipes-search-results" ref={searchResultsRef}>
      <div className="container">
        <h2 className="heading-2">
          Hasil pencarian untuk{" "}
          <span style={{ color: "#51C273" }}>{keyword} </span>
          {recipes && <span className="amount">({recipes.length})</span>}
        </h2>
        {error && <p>{error}</p>}
        {isLoading && <p>Tunggu sebentar...</p>}
        {recipes && <RecipeList recipes={recipes} />}
      </div>
    </section>
  );
};

export default SearchResults;
