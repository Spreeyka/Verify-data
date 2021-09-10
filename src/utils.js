import { BENFORDS_FIRST_NUMBERS } from "./constants";

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
      if (element.match(/^[1-9]+.[1-9]+$/)) {
        numberValues.push(element);
      }
    }
  }
  return numberValues;
}

export function generateDataForChart(data) {
  let chartData = [];
  for (let i = 0; i < 9; i++) {
    chartData.push({
      number: i + 1,
      benfordsValue: BENFORDS_FIRST_NUMBERS[i],
      calculatedData: Number((data[i] / sumAllNumberOccurances(data)) * 100),
    });
  }
  return chartData;
}

export function calculateOccurancesOfDataNumbers(data) {
  let occurancesOfNumbersArray = new Array(9);
  occurancesOfNumbersArray.fill(0);
  for (const iterator of data) {
    occurancesOfNumbersArray[Number(iterator[0]) - 1] += 1;
  }
  return occurancesOfNumbersArray;
}

export function sumAllNumberOccurances(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}
