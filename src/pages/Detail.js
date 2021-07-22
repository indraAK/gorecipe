import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BiBarChartAlt, BiDish, BiTime, BiCheck } from "react-icons/bi";
import useAxios from "../components/useAxios";
import notFoundImg from "../images/img-not-found.png";
import { BookmarkContext } from "../contexts/BookmarkContext";

const Detail = () => {
  const { key } = useParams();
  const { data, isLoading } = useAxios(
    `https://cors.bridged.cc/https://masak-apa.tomorisakura.vercel.app/api/recipe/${key}`
  );
  let recipe;

  if (data) {
    recipe = { ...data, key };
  }

  const { dispatch, isSaved } = useContext(BookmarkContext);

  return (
    <section className="detail">
      <div className="container">
        {isLoading && <p>Tunggu sebentar...</p>}
        {recipe && (
          <div className="recipe recipe-detail recipe-card">
            <img src={recipe.thumb ? recipe.thumb : notFoundImg} alt="" />
            <div className="recipe-body">
              <h3 className="recipe-title">{recipe.title}</h3>
              <p className="recipe-by">
                {recipe.author.user} -
                <time> {recipe.author.datePublished}</time>
              </p>
              <div className="recipe-info">
                <div className="icon-group">
                  <BiBarChartAlt className="icon" />
                  <p>{recipe.dificulty}</p>
                </div>
                <div className="icon-group">
                  <BiDish className="icon" />
                  <p>{recipe.servings}</p>
                </div>
                <div className="icon-group">
                  <BiTime className="icon" />
                  <p>{recipe.times}</p>
                </div>
              </div>
              {/* bahan2 */}
              <div className="ingredients">
                <h4 className="heading-4">Bahan - Bahan :</h4>
                <ul className="list-group">
                  {recipe.ingredient.map((ingredient, idx) => (
                    <li key={idx}>
                      <BiCheck
                        color="hsl(138, 48%, 54%)"
                        size="20px"
                        className="icon"
                      />{" "}
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              {/* langkah2 */}
              <div className="steps">
                <h4 className="heading-4">Langkah pembuatan :</h4>
                <ul className="list-group list-group-border">
                  {recipe.step.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </div>
              {/* tombol simpan resep */}
              <div style={{ textAlign: "center" }}>
                <button
                  className="btn btn-primary"
                  style={{ margin: "4rem auto 0" }}
                  onClick={() =>
                    dispatch({ type: "TOGGLE_SAVE", payload: recipe, key })
                  }
                >
                  {isSaved(key) ? (
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <BiCheck fontSize="20px" style={{ marginRight: "5px" }} />{" "}
                      Disimpan
                    </span>
                  ) : (
                    <span>Simpan Resep</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Detail;
