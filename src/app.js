import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SnippetList from "./components/SnippetList";
import CreateSnippet from "./components/CreateSnippet";
import SnippetDetail from "./components/SnippetDetail";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Snippet List</Link>
            </li>
            <li>
              <Link to="/create">Create a New Snippet</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/create">
            <CreateSnippet />
          </Route>
          <Route exact path="/">
            <SnippetList />
          </Route>
          <Route exact path="/snippet/:id">
            <SnippetDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
