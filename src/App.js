import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Charts from "./components/Charts/Charts";
import { Header } from "./components/Header/Header";
import { Imports } from "./Utils/Imports";
import { Tables } from "./components/Tables/Tables";
import { Button } from "./components/Button/Button";
import { Sidebar } from "./components/SideBar";

function App() {
  return (
    <div>
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
          <div>
            <Sidebar />
            <div className="layout-container">
              <Header></Header>
              <Tables></Tables>
              <Button content="Check your own data"></Button>
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
