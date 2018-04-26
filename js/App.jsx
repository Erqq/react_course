import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";
import Details from "./Details";
import preload from "../data.json";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Route exact path="/" component={Landing} />
        <Route
          path="/search"
          component={props => <Search shows={preload.shows} {...props} />}
        />
        <Route
          path="/details/:id"
          component={props => {
            const selected = preload.shows.find(
              show => props.match.params.id === show.imdbID
            );
            return <Details show={selected} {...props} />;
          }}
        />
      </div>
    </BrowserRouter>
  );
};
export default App;
