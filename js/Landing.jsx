import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setSearchTerm } from "./actionCreators";

const Landing = (props, searchTerm) => (
  <div className="landing">
    <h1>svideo</h1>
    <input
      value={props.hand}
      onChange={props.handleSearchTermChange}
      type="text"
      placeholder="Search"
    />
    <Link to="/search">Or browse all</Link>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});
const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
