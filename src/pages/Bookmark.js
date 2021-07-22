import { useContext } from "react";
import { BookmarkContext } from "../contexts/BookmarkContext";
import RecipeList from "../components/RecipeList";
import noDataImg from "../images/no-data.svg";

const Bookmark = () => {
  const { recipes } = useContext(BookmarkContext);

  return (
    <section className="bookmarks">
      <div className="container">
        {recipes.length > 0 ? (
          <>
            <h2 className="heading-2">
              Resep yang kamu simpan{" "}
              <span className="amount">({recipes.length})</span>
            </h2>
            <RecipeList recipes={recipes} />
          </>
        ) : (
          <div style={{ textAlign: "center", marginTop: "10rem" }}>
            <img src={noDataImg} className="illustration" alt="" />
            <h3 style={{ marginTop: "3rem" }}>
              Belum ada resep yang Disimpan!
            </h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Bookmark;
