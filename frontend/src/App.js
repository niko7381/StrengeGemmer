import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Arrow from "./containers/Arrows";
import Strings from "./containers/Strings";

import Home from "./containers/Home";

import Layout from "./hocs/Layout"

const App = () => {
  return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/arrows" component={Arrow} />
            <Route exact path="/strings" component={Strings} />
          </Switch>
        </Layout>
      </Router>
  );
}

export default App;