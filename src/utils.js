import { CONSTANTS } from "./Constants";

export function getDatasetNames(r) {
  return r.keys();
}

export function importAll(r) {
  return r.keys().map(r);
}

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
      if (element.match(/^[1-9]+[0-9]*.?[0-9]*$/) && element.length > 1) {
        //znaleźć lepsze JSON API tak żeby nie były to dane procentowe i wtedy poprawić tę funkcję
        numberValues.push(element);
      }
    }
  }
  return numberValues;
}

export function generateDataForChart(data, benfordsValues) {
  if (data) {
    let chartData = {};
    let digit = 1;
    let maxDigit = 9;
    for (let j = 0; j < Object.keys(CONSTANTS).length; j++) {
      let chartKey = "Chart" + j;
      let chartConstant = "CHART_" + j + "_CONSTANTS";
      chartData[chartKey] = [];

      //for all charts except Chart0 we also need to count digit 0 (since it cannot appear on first position of numbers)
      if (chartKey !== "Chart0") {
        digit = 0;
        maxDigit = 10;
      }

      for (let i = 0; i < maxDigit; i++) {
        chartData[chartKey].push({
          number: digit++,
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
  for (let i = 0; i < Object.keys(CONSTANTS).length - 1; i++) {
    occurrancesArray.push(calculateOccurancesOfDataNumbers(numberValues, i));
  }
  occurrancesArray.push(calculateConditionalOccurances_1_x(numberValues));
  //console.log("occurrancesArray :>> ", occurrancesArray);
  return occurrancesArray;
}
