import { useState } from "react";
import { BiSearch } from "react-icons//bi";
import { useHistory } from "react-router-dom";

const SearchBar = ({ value }) => {
  const [term, setTerm] = useState(value);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`?search=${term}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <BiSearch className="search-icon" />
        <input
          type="search"
          placeholder="Hari ini mau resep apa?"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-search">
          <BiSearch color="#fff" size="1.7rem" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
