import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Arrowpage from "./components/ArrowPage";
import Stringpage from "./components/StringPage";

import Homepage from "./containers/Homepage";

import Layout from "./hocs/Layout"

const App = () => {
  return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/arrows" component={Arrowpage} />
            <Route exact path="/strings" component={Stringpage} />
          </Switch>
        </Layout>
      </Router>
  );
}

export default App;