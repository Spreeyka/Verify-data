import {
  CONSTANTS,
  KOLMOGOROV_SMIRNOV_CRITICAL_VALUES,
  Z_TEST_CRITICAL_VALUES,
  CHI_SQUARE_CRITICAL_VALUES,
  CORRELATION_CRITICAL_VALUES,
} from "./Constants";
import {
  calculate_Theoretical_Amounts_Array,
  calculate_C_Parameter_Array,
  calculateChiSquareTest,
  calculateCorrelationCoefficient,
  calculateKolmogorovSmirnovTest,
  calculate_D_Parameter,
  calculate_F_Parameter_Array,
  calculate_M1_Test,
  calculate_M2_Test,
  calculate_M3_Test,
  calculate_P_Parameter_Array,
  calculate_Z_Test,
} from "./indicatorsUtils";
import { IndicatorWithIcon } from "./IndicatorWithIcon";

export function Indicators({ data, index }) {
  let sampleSize = data[data.length - 1].numberOfAnalysedData;
  let benfordsValues = [];
  for (let i = 0; i < data.length - 1; i++) {
    benfordsValues.push(Number(data[i].benfordsValue));
  }
  let empiricalOccurancesOfNumbersArray = [];
  for (let i = 0; i < data.length - 1; i++) {
    empiricalOccurancesOfNumbersArray.push(
      Math.round(data[i].calculatedData * sampleSize) / 100
    );
  }
  let theoreticalOccurrancesOfNumbersArray =
    calculate_Theoretical_Amounts_Array(benfordsValues, sampleSize);
  let empirical_C_parameter_Array = calculate_C_Parameter_Array(
    empiricalOccurancesOfNumbersArray,
    sampleSize
  );
  let theoretical_C_parameter_Array = calculate_C_Parameter_Array(
    theoreticalOccurrancesOfNumbersArray,
    sampleSize
  );
  let empirical_P_Parameter_Array = calculate_P_Parameter_Array(
    empiricalOccurancesOfNumbersArray,
    sampleSize
  );
  let theoretical_P_Parameter_Array = calculate_P_Parameter_Array(
    theoreticalOccurrancesOfNumbersArray,
    sampleSize
  );
  let empirical_F_Parameter_Array = calculate_F_Parameter_Array(
    empirical_P_Parameter_Array
  );
  let theoretical_F_Parameter_Array = calculate_F_Parameter_Array(
    theoretical_P_Parameter_Array
  );
  let d_Parameter = calculate_D_Parameter(
    empirical_F_Parameter_Array,
    theoretical_F_Parameter_Array
  );
  let chiSquareTest = calculateChiSquareTest(
    empirical_C_parameter_Array,
    theoretical_C_parameter_Array,
    sampleSize
  );
  let Z_Test = calculate_Z_Test(
    empirical_P_Parameter_Array,
    theoretical_P_Parameter_Array,
    sampleSize
  );

  let kolmogorovSmirnovTest = calculateKolmogorovSmirnovTest(
    d_Parameter,
    sampleSize
  );
  let correlationCoefficient = calculateCorrelationCoefficient(
    empiricalOccurancesOfNumbersArray,
    theoreticalOccurrancesOfNumbersArray
  );
  let M1_Test = calculate_M1_Test(
    empirical_C_parameter_Array,
    theoretical_C_parameter_Array
  );
  let M2_Test = calculate_M2_Test(
    empirical_C_parameter_Array,
    theoretical_C_parameter_Array
  );
  let M3_Test = calculate_M3_Test(
    empirical_C_parameter_Array,
    theoretical_C_parameter_Array
  );

  let chartConstant = "CHART_" + index + "_CONSTANTS";

  return (
    <div className="indicator-container">
      <p>
        Z test: {Z_Test.join(" ")}
        <IndicatorWithIcon
          value={
            Z_Test.filter((x) => Math.abs(x) > Z_TEST_CRITICAL_VALUES.VALUES[1])
              .length
          }
          critValue={5}
          operator={`>=`}
        ></IndicatorWithIcon>
      </p>

      <p>
        Kolmogorov-Smirnov test: {kolmogorovSmirnovTest.toFixed(2)}
        <IndicatorWithIcon
          value={kolmogorovSmirnovTest}
          critValue={KOLMOGOROV_SMIRNOV_CRITICAL_VALUES.VALUES[1]}
          operator={`>=`}
        ></IndicatorWithIcon>
      </p>
      {index !== 2 ? (
        <p className="correlation-header">
          Correlation coefficient: {correlationCoefficient.toFixed(2)}
          <IndicatorWithIcon
            value={Math.abs(correlationCoefficient)}
            critValue={CORRELATION_CRITICAL_VALUES.VALUES[2]}
            operator={`<`}
          ></IndicatorWithIcon>
        </p>
      ) : null}

      <p>
        Chi square test: {chiSquareTest.toFixed(2)}
        {console.log("wynik", CHI_SQUARE_CRITICAL_VALUES[chartConstant][2])}
        <IndicatorWithIcon
          value={chiSquareTest}
          critValue={CHI_SQUARE_CRITICAL_VALUES[chartConstant][2]}
          operator={`>=`}
        ></IndicatorWithIcon>
      </p>
      <p>M1 test: {M1_Test.toFixed(2)}</p>
      <p>M2 test: {M2_Test.toFixed(2)}</p>
      <p>M3 test: {M3_Test.toFixed(2)}</p>
    </div>
  );
}
