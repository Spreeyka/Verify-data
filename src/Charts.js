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

const Charts = (props) => {
  const { id } = useParams();
  const [data, setData] = useState(localStorage.getItem("data") || []);
  const [chartsData, setChartsData] = useState(
    localStorage.getItem("chartsData") || {}
  );
  const datasets = importAll(require.context("./data/", false, /\.(json)$/));

  useEffect(() => {
    requestData();
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    window.sessionStorage.setItem("chartsData", JSON.stringify(chartsData));
  }, [chartsData]);

  async function requestData() {
    let res;
    let numberValues;

    if (props.type === "data") {
      res = datasets[id - 1];
      setData(res);
      numberValues = getAllNumberFromFlattenedJson(res);
    } else if (props.type === "api") {
      res = await fetch(API[id - 1]);
      const json = await res.json();
      setData(json);
      numberValues = getAllNumberFromFlattenedJson(json);
    }
    let occurancesOfNumbers = populateOccurrancesOfNumbersArray(numberValues);
    setChartsData(generateDataForChart(occurancesOfNumbers, CONSTANTS));
  }

  return (
    //tutaj dać mapowanie chartów
    <div className="chart-container">
      <Chart props={chartsData.Chart0}></Chart>
      <Chart props={chartsData.Chart1}></Chart>
      <Chart props={chartsData.Chart2}></Chart>
      <Chart props={chartsData.Chart3}></Chart>
    </div>
  );

  //p className="data">{console.log(chartsData)}</>;
};

export default Charts;
