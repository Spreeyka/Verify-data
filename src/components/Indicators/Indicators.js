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
} from "../../Utils/indicatorsUtils";
import { KolmogorovSmirnovIndicator } from "../KolmogorovSmirnovIndicator/KolmogorovSmirnovIndicator";
import { CorrelationCoefficientIndicator } from "../CorrelationCoefficientIndicator/CorrelationCoefficientIndicator";
import { ChiSquareIndicator } from "../ChiSquareIndicator/ChiSquareIndicator";
import { ZTestIndicator } from "../ZTestIndicator/ZTestIndicator";
import { MTests } from "../MTests/MTests";
import styles from "./Indicators.module.css";

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
    <div className={`${styles["wrapper"]}`}>
      <ZTestIndicator value={Z_Test}></ZTestIndicator>
      <KolmogorovSmirnovIndicator
        value={kolmogorovSmirnovTest}
      ></KolmogorovSmirnovIndicator>
      <CorrelationCoefficientIndicator
        value={correlationCoefficient}
        index={index}
      ></CorrelationCoefficientIndicator>
      <ChiSquareIndicator
        value={chiSquareTest}
        chartConstant={chartConstant}
      ></ChiSquareIndicator>
      <MTests M1_Test={M1_Test} M2_Test={M2_Test} M3_Test={M3_Test}></MTests>
    </div>
  );
}
