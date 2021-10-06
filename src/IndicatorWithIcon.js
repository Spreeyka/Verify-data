import {
  CONSTANTS,
  KOLMOGOROV_SMIRNOV_CRITICAL_VALUES,
  Z_TEST_CRITICAL_VALUES,
  CHI_SQUARE_CRITICAL_VALUES,
  CORRELATION_CRITICAL_VALUES,
} from "./Constants";

export function IndicatorWithIcon({ value, critValue, operator }) {
  let operators = {
    ">=": function (a, b) {
      return a >= b;
    },
    "<": function (a, b) {
      return a < b;
    },
  };

  return (
    <>
      {operators[operator](value, critValue) ? (
        <span className="material-icons red">error</span>
      ) : (
        <span className="material-icons green">done</span>
      )}
    </>
  );
}
