import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import useAxios from "../components/useAxios";
import RecipeList from "../components/RecipeList";
import { useLocation } from "react-router-dom";

const Home = () => {
  const params = new URLSearchParams(useLocation().search);
  const query = params.get("search");
  const {
    data: recipes,
    isLoading,
    error,
  } = useAxios(
    "https://cors.bridged.cc/https://masak-apa.tomorisakura.vercel.app/api/recipes/"
  );

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Gorecipe menyediakan kumpulan resep masakan khas indonesia</h1>
          <SearchBar value={query ? query : ""} />
          <div className="mouse-scroll-anim"></div>
        </div>
      </section>
      {/* Kontent - Hasil pencarian resep */}
      {query && <SearchResults keyword={query} />}
      {
        /* Kontent - Resep untukmu hari ini */
        <section className="recipes recipes-today">
          <div className="container">
            <h2 className="heading-2">Resep untukmu hari ini</h2>
            {error && <p>{error}</p>}
            {isLoading && <p>Tunggu sebentar...</p>}
            {recipes && <RecipeList recipes={recipes} />}
          </div>
        </section>
      }
    </>
  );
};

export default Home;
