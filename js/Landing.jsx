import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Landing = (props, searchTerm) => (
  <div className="landing">
    <h1>svideo</h1>
    <input value={props.searchTerm} type="text" placeholder="Search" />
    <Link to="/search">Or browse all</Link>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});
export default connect(mapStateToProps)(Landing);
