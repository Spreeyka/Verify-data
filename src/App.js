import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Charts from "./components/Charts/Charts";
import { Header } from "./components/Header/Header";
import { Imports } from "./Utils/Imports";
import { Tables } from "./components/Tables/Tables";
import { Button } from "./components/Buttons/Button";
import { Sidebar } from "./components/Sidebar/Sidebar";

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
          <Route path="/custom/charts">
            <Charts type="custom"></Charts>
          </Route>
          <Route path="/csv/charts">
            <Charts type="csv"></Charts>
          </Route>
          <div className="main-container">
            <Sidebar />
            <div className="layout-container">
              <Header></Header>
              <Tables></Tables>
              <div className="button-wrapper">
                <Button content="Check your own data"></Button>
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
