import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();

  const styles = {
    searchbar: {
      width: "80%",
      height: "4%",
      margin: "auto",
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.searchBar.value.split(" ").join("%20");
    navigate("/weather", { state: userInput });
  };

  return (
    <>
      <form
        className="d-flex"
        role="search"
        style={styles.searchbar}
        onSubmit={handleSubmit}
      >
        <input
          className="form-control me-2"
          type="search"
          location="location"
          placeholder="Search"
          aria-label="Search"
          autoComplete="off"
          id="searchBar"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  );
}
