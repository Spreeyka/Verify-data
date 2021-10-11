import { useEffect, useState } from "react";
import "./App.css";
import { useParams } from "react-router";
import Chart from "./Chart";
import { API, CONSTANTS } from "./Constants";
import {
  getAllNumberFromFlattenedJson,
  populateOccurrancesOfNumbersArray,
  generateDataForChart,
  importAll,
} from "./utils";
import { Indicators } from "./Indicators";
import { ErrorPage } from "./ErrorPage";
import { BackButton } from "./BackButton";
import { Link } from "react-router-dom";

const Charts = (props) => {
  const { id } = useParams();
  const [chartsData, setChartsData] = useState({});
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("loading");

  const datasets = importAll(require.context("./data/", false, /\.(json)$/));
  let res;
  let numberValues;
  let occurancesOfNumbers;

  useEffect(() => {
    requestData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestData() {
    try {
      if (props.type === "data") {
        res = datasets[id - 1];
        numberValues = getAllNumberFromFlattenedJson(res);
      } else if (props.type === "api") {
        res = await fetch(API[id - 1]);
        const json = await res.json();
        numberValues = getAllNumberFromFlattenedJson(json);
      } else {
        const json = JSON.parse(localStorage.getItem("data"));
        numberValues = getAllNumberFromFlattenedJson(json);
      }
      occurancesOfNumbers = populateOccurrancesOfNumbersArray(numberValues);
      setChartsData(generateDataForChart(occurancesOfNumbers, CONSTANTS));
      setStatus("loaded");
    } catch (error) {
      setError(true);
    }
  }

  return error === false ? (
    <>
      <div className="charts-container">
        {Object.values(chartsData).map((value, index) => (
          <div key={index} className="chart-container">
            <Chart
              data={value.slice(0, -1)}
              numberOfAnalysedData={
                value[value.length - 1].numberOfAnalysedData
              }
            ></Chart>
            <div>
              <Indicators
                data={value}
                occur={occurancesOfNumbers}
                index={index}
              ></Indicators>
            </div>
          </div>
        ))}
      </div>
      {status === "loaded" ? (
        <div className="button-container">
          <Link style={{ textDecoration: "none" }} to="/">
            <BackButton content="◄◄◄ go back to homepage"></BackButton>
          </Link>
        </div>
      ) : null}
    </>
  ) : (
    <ErrorPage></ErrorPage>
  );
};

export default Charts;
