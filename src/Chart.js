import { useEffect, useState } from "react";
import "./App.css";
import { useParams } from "react-router";
import Charts from "../src/Charts";
import { Constants } from "./constants";
import {
  calculateConditionalOccurances_1_x,
  calculateOccurancesOfDataNumbers,
  getAllNumberFromFlattenedJson,
  populateOccurrancesOfNumbersArray,
} from "./utils";
import { generateDataForChart } from "./utils";

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
    const res = await fetch(
      `https://raw.githubusercontent.com/statisticspoland/sdg-indicators-pl/master/api/v1/globalne/plec_g.json`
    );
    const json = await res.json();
    setData(json);
    let numberValues = getAllNumberFromFlattenedJson(json);
    let occurancesOfNumbers = populateOccurrancesOfNumbersArray(numberValues);

    // console.log(" Wystąpienia cyfr:>> ", occurancesOfNumbers);
    setChartsData(generateDataForChart(occurancesOfNumbers, Constants));
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
