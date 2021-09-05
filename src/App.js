import "./App.css";
import { Table } from "./Table";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chart from "./Chart";

function App() {
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
          <Route path="/charts/:id">
            <Chart></Chart>
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
            <div className="table-container">
              <Table></Table>
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
