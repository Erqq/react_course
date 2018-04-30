import React from "react";
import { render } from "react-dom";
import { Route, Switch } from "react-router-dom";
import AsyncRouter from "./AsyncRoute";
import preload from "../data.json";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Route
          exact
          path="/"
          component={props => (
            <AsyncRouter props={props} loadingPromise={import("./Landing")} />
          )}
        />
        <Route
          path="/search"
          component={props => (
            <AsyncRouter
              props={Object.assign({ shows: preload.shows }, props)}
              loadingPromise={import("./Search")}
            />
          )}
        />
        <Route
          path="/details/:id"
          component={(props, match) => {
            const selected = preload.shows.find(
              show => props.match.params.id === show.imdbID
            );
            return (
              <AsyncRouter
                props={Object.assign({ show: selected, match: {} }, props)}
                loadingPromise={import("./Details")}
              />
            );
          }}
        />
      </div>
    </Provider>
  );
};
export default App;
