import React from "react";
import { render } from "react-dom";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";
import Details from "./Details";
import preload from "../data.json";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};
export default App;
