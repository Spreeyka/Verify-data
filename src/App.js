import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Charts from "./Charts";
import { Header } from "./Header";
import { Imports } from "./Imports";
import { Tables } from "./Tables";
import { Button } from "./Button";
import { Modal } from "./DataModal";

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
        <Button></Button>
      </Router>
    </div>
  );
}

export default App;
