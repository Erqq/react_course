import React, { Component } from "react";
import ShowCard from "./ShowCard";
import Header from "./Header";
import { connect } from "react-redux";

const Search = (props, searchTerm) => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(
          show =>
            `${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(props.searchTerm.toUpperCase()) >= 0
        )
        .map(show => <ShowCard key={show.imdbID} show={show} />)}
    </div>
  </div>
);
const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});
export default connect(mapStateToProps)(Search);
