import { useEffect, useState } from "react";
import "./App.css";
import { useParams } from "react-router";
import Charts from "./Chart";
import { API, CONSTANTS } from "./Constants";
import {
  getAllNumberFromFlattenedJson,
  populateOccurrancesOfNumbersArray,
  generateDataForChart,
} from "./utils";

const Chart = () => {
  //const { id } = useParams();
  const [data, setData] = useState(localStorage.getItem("data") || []);
  const [chartsData, setChartsData] = useState(
    localStorage.getItem("chartsData") || {}
  );

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
    const res = await fetch(API[1]); //tutaj damy id -1
    const json = await res.json();
    setData(json);
    let numberValues = getAllNumberFromFlattenedJson(json);
    let occurancesOfNumbers = populateOccurrancesOfNumbersArray(numberValues);

    // console.log(" Wystąpienia cyfr:>> ", occurancesOfNumbers);
    setChartsData(generateDataForChart(occurancesOfNumbers, CONSTANTS));
  }

  return (
    <div className="chart-container">
      <Charts props={chartsData.Chart0}></Charts>
      <Charts props={chartsData.Chart1}></Charts>
      <Charts props={chartsData.Chart2}></Charts>
      <Charts props={chartsData.Chart3}></Charts>
    </div>
  );

  //p className="data">{console.log(chartsData)}</>;
};

export default Chart;
