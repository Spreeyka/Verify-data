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
  flattenJson,
} from "./utils";
import { Indicators } from "./Indicators";

const Charts = (props) => {
  //console.log("props location:>> ", props.location.formData);
  const { id } = useParams();
  const [data, setData] = useState(
    localStorage.getItem("data") || props.location?.formData || []
  );
  const [chartsData, setChartsData] = useState(
    localStorage.getItem("chartsData") || {}
  );

  const datasets = importAll(require.context("./data/", false, /\.(json)$/));
  let res;
  let numberValues;
  let occurancesOfNumbers;

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
    if (props.type === "data") {
      res = datasets[id - 1];
      setData(res);
      console.log("typ daty z dataplik :>> ", typeof data);

      numberValues = getAllNumberFromFlattenedJson(res);
    } else if (props.type === "api") {
      res = await fetch(API[id - 1]);
      const json = await res.json();

      setData(json);
      console.log("typ daty z API :>> ", typeof data);
      numberValues = getAllNumberFromFlattenedJson(json);
    } else if (props.location.type === "custom") {
      setData(props.location.data);
      const json = JSON.parse(data);
      numberValues = getAllNumberFromFlattenedJson(json);
    }

    occurancesOfNumbers = populateOccurrancesOfNumbersArray(numberValues);
    setChartsData(generateDataForChart(occurancesOfNumbers, CONSTANTS));
  }

  return (
    <div className="charts-container">
      {Object.values(chartsData).map((value, index) => (
        <div key={index} className="chart-container">
          <Chart
            data={value.slice(0, -1)}
            numberOfAnalysedData={value[value.length - 1].numberOfAnalysedData}
          ></Chart>
          <div>
            <Indicators data={value} occur={occurancesOfNumbers}></Indicators>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Charts;
