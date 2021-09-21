import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Charts from "./Charts";
import { Header } from "./Header";
import { Imports } from "./Imports";
import { Tables } from "./Tables";

function App() {
  return (
    <div className="App">
      <Imports></Imports>
      <Router>
        <Switch>
          <Route path="/data/charts/:id">
            <Charts type="data"></Charts>
          </Route>
          <Route path="/api/charts/:id">
            <Charts type="api"></Charts>
          </Route>
          <div className="main-container">
            <Header></Header>
            <Tables></Tables>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
