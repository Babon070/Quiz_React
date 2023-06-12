import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Quiz from "./quiz/Quiz";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/quiz/:id">
        <Quiz />
      </Route>
    </Switch>
  );
};

export default Router;
