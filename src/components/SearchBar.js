import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import brands from "../Pages/DummyData/brandsLogo";
const SearchBar = () => {
  const [query, setQuery] = useState(brands);
  const [searching, setSearching] = useState();
  console.log(query);
  console.log(brands);
  const search = () => {
    console.log(1);
    setSearching(query);
  };
  return (
    <div className="search">
      <input
        //   type="search"
        placeholder="브랜드를 검색해보세요"
        className="search_bar"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="search_submit" onClick={search}>
        <FontAwesomeIcon icon={faSearch} className="search_icon" />
      </button>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ search }, dispatch);
// };
export default SearchBar;
