import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { search } from "../redux-Moduls/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends Component {
  render() {
    const { search, value } = this.props;
    return (
      <div className="search">
        <input
          //   type="search"
          placeholder="뭐라도 입력하세요"
          className="home_search"
          onChange={(e) => search(e.target.value)}
          value={value}
        />
        <FontAwesomeIcon icon={faSearch} className="search_icon" />
      </div>
    );
  }
}

const mapStateToProps = ({ works }) => {
  return { value: works.value };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ search }, dispatch);
};
export default connect(null, mapDispatchToProps)(SearchBar);
