import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { search, setLoanding } from "../redux-Moduls/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends Component {
  onChange = (e) => {
    this.props.search(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.setLoanding();
  };
  render() {
    return (
      <div className="search">
        <input
          //   type="search"
          placeholder="뭐라도 입력하세요"
          className="search_bar"
          onChange={onchange}
        />
        <button type="submit" className="search_submit">
          <FontAwesomeIcon icon={faSearch} className="search_icon" />
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.brands.value,
});

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ search }, dispatch);
// };
export default connect(mapStateToProps, { search })(SearchBar);
