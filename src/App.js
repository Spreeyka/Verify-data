import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Charts from "./Charts";
import { Header } from "./Header";
import { Imports } from "./Imports";
import { Tables } from "./Tables";
import { Button } from "./Button";
import MyImage from "./images/benek2.png";

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
          <Route component={Charts} path="/custom/charts"></Route>
          <div className="main-container">
            <div className="big-container">
              <Header></Header>
              <Tables></Tables>
              <Button></Button>
              <img src={MyImage} alt="Benford" className="responsive-image" />
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
