// This constants represents ideal number occurranes percentages in given data-set
// CHART_0_CONSTANTS - % of numbers from 1-9 occuring on first significant position
// CHART_1_CONSTANTS - % of numbers from 0-9 occuring on second significant position
// CHART_2_CONSTANTS - % of numbers from 0-9 occuring on third significant position
// CHART_3_CONSTANTS - % of numbers from 0-9 occuring on second significant position, where first significant position number equals 1

export const CONSTANTS = {
  CHART_0_CONSTANTS: [30.1, 17.7, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6],
  CHART_1_CONSTANTS: [11.9, 11.3, 10.9, 10.4, 10.0, 9.7, 9.3, 9.0, 8.8, 8.6],
  CHART_2_CONSTANTS: [10.2, 10.1, 10.0, 10.0, 10.0, 9.9, 9.9, 9.9, 9.9, 9.8],
  CHART_3_CONSTANTS: [13.7, 12.5, 11.5, 10.7, 9.9, 9.3, 8.7, 8.2, 7.8, 7.4],
};

//Significance levels: 0.1, 0.05, 0.01, 0.001
export const CHI_SQUARE_CRITICAL_VALUES = {
  CHART_0_CONSTANTS: [13.4, 15.5, 20.1, 26.1],
  CHART_1_CONSTANTS: [14.7, 16.9, 21.7, 27.9],
  CHART_2_CONSTANTS: [14.7, 16.9, 21.7, 27.9],
  CHART_3_CONSTANTS: [14.7, 16.9, 21.7, 27.9],
};

//Significance levels: 0.05, 0.01
export const KOLMOGOROV_SMIRNOV_CRITICAL_VALUES = {
  VALUES: [1.36, 1.63],
};
export const Z_TEST_CRITICAL_VALUES = {
  VALUES: [1.96, 2.58],
};

// 0-0.3 - weak correlation
// 0.3-0.5 - medium correlation
// 0.5-0.7 - strong correlation
// 0.7-1 - very strong correlation

export const CORRELATION_CRITICAL_VALUES = {
  VALUES: [0.3, 0.5, 0.7, 1],
};

export const API = [
  `https://raw.githubusercontent.com/statisticspoland/sdg-indicators-pl/master/api/v1/globalne/plec_g.json`,
  `https://123.githubusercontent.com/statisticspoland/sdg-indicators-pl/master/api/v1/globalne/plec_g.json`,
  `https://456.githubusercontent.com/statisticspoland/sdg-indicators-pl/master/api/v1/globalne/plec_g.json`,
];
