import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Charts from "../src/Charts";
import {
  calculateOccurancesOfDataNumbers,
  getAllNumberFromFlattenedJson,
} from "./utils";
import { generateDataForChart } from "./utils";

const Chart = () => {
  //const { id } = useParams();
  const [data, setData] = useState(localStorage.getItem("data") || []);
  const [chartData, setChartData] = useState(
    localStorage.getItem("chartsData") || []
  );

  useEffect(() => {
    requestData();
  }, []);

  useEffect(() => {
    setChartData(generateDataForChart(data));
    window.sessionStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    window.sessionStorage.setItem("chartsData", JSON.stringify(chartData));
  }, [chartData]);

  async function requestData() {
    const res = await fetch(
      `https://raw.githubusercontent.com/statisticspoland/sdg-indicators-pl/master/api/v1/globalne/plec_g.json`
    );
    const json = await res.json();

    let numberValues = getAllNumberFromFlattenedJson(json);
    let occurancesOfNumbers = calculateOccurancesOfDataNumbers(numberValues);

    setData(occurancesOfNumbers);
  }

  return <Charts props={chartData}></Charts>;

  //{console.log("data", chartData)}
  //{console.log("data i chart data to", data, chartData)}
  //<p className="data">{console.log(chartData)}</p>;
};

export default Chart;
