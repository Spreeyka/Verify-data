import "./App.css";
import { Table } from "./Table";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Charts from "./Charts";
import { getDatasetNames } from "./utils";
import { useEffect, useState } from "react";
import { API } from "./Constants";

function App() {
  const [datasetNames, setDatasetNames] = useState([]);
  const [apiNames, setApiNames] = useState([]);

  useEffect(() => {
    setDatasetNames(getDatasetNames(require.context("./data", false, /json$/)));
    setApiNames(API);
  }, []);

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      ></link>

      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Josefin+Slab:wght@600&display=swap');
      </style>

      <Router>
        <Switch>
          <Route path="/data/charts/:id">
            <Charts type="data"></Charts>
          </Route>
          <Route path="/api/charts/:id">
            <Charts type="api"></Charts>
          </Route>
          <div className="main-container">
            <header className="App-header">
              Benford's law
              <div className="description">
                <div>
                  <p>The law of anomalous numbers, or the first-digit law</p>
                </div>
                <div>
                  <p>
                    Observation about the frequency distribution of leading
                    digits in many real-life sets of numerical data
                  </p>
                </div>
              </div>
            </header>
            <div className="tables-div">
              <div className="table-container">
                <Table values={datasetNames}></Table>
              </div>
              <div className="table-container2">
                <Table values={apiNames}></Table>
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
