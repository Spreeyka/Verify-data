import { BENFORDS_FIRST_NUMBERS, Constants } from "./constants";

export const flattenJson = (obj, path = "") => {
  if (!(obj instanceof Object)) return { [path.replace(/\.$/g, "")]: obj };

  return Object.keys(obj).reduce((output, key) => {
    return obj instanceof Array
      ? { ...output, ...flattenJson(obj[key], path + "[" + key + "].") }
      : { ...output, ...flattenJson(obj[key], path + key + ".") };
  }, {});
};

export function getAllNumberFromFlattenedJson(json) {
  let element;
  let numberValues = [];
  let flattenedJson = flattenJson(json);
  for (const key in flattenedJson) {
    if (Object.hasOwnProperty.call(flattenedJson, key)) {
      element = flattenedJson[key];
      if (element.match(/^[1-9]+[0-9]*.[0-9]*$/) && element.length > 3) {
        numberValues.push(element);
      }
    }
  }
  return numberValues;
}

export function generateDataForChart(data, benfordsValues) {
  if (data) {
    let chartData = {};
    let number = 1;
    let max = 9;
    for (let j = 0; j < Object.keys(Constants).length; j++) {
      let chartKey = "Chart" + j;
      let chartConstant = "CHART_" + j + "_CONSTANTS";
      if (chartKey !== "Chart0") {
        number = 0;
        max = 10;
      }

      chartData[chartKey] = [];

      for (let i = 0; i < max; i++) {
        chartData[chartKey].push({
          number: number++,
          benfordsValue: benfordsValues[chartConstant][i],
          calculatedData: Number(
            (data[j][i] / sumAllNumberOccurances(data[j])) * 100
          ),
        });
      }
    }
    return chartData;
  }
}

export function calculateOccurancesOfDataNumbers(data, position) {
  let occurancesOfNumbersArray = new Array(10);
  occurancesOfNumbersArray.fill(0);
  for (let stringValue of data) {
    stringValue = stringValue.replace(".", "");
    if (position === 0)
      occurancesOfNumbersArray[Number(stringValue[position]) - 1] += 1;
    else {
      occurancesOfNumbersArray[Number(stringValue[position])] += 1;
    }
  }
  return occurancesOfNumbersArray;
}

export function calculateConditionalOccurances_1_x(data) {
  let occurancesOfNumbersArray = new Array(10);
  occurancesOfNumbersArray.fill(0);
  data.forEach((e) => {
    if (e[0] === "1") {
      e.replace(".", "");
      occurancesOfNumbersArray[e[1]]++;
    }
  });
  return occurancesOfNumbersArray;
}

export function sumAllNumberOccurances(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

export function populateOccurrancesOfNumbersArray(numberValues) {
  let occurrancesArray = [];
  for (let i = 0; i < Object.keys(Constants).length; i++) {
    occurrancesArray.push(calculateOccurancesOfDataNumbers(numberValues, i)); //źle liczy na 3 pozycji i czwartej?
  }
  occurrancesArray.push(calculateConditionalOccurances_1_x(numberValues));
  console.log("occurrancesArray :>> ", occurrancesArray);
  return occurrancesArray;
}
