export function calculate_Theoretical_Amounts_Array(
  benfordsValues,
  sampleSize
) {
  let theoreticalAmountsArray = [];
  for (const element of benfordsValues) {
    theoreticalAmountsArray.push(Math.round((element * sampleSize) / 100));
  }
  return theoreticalAmountsArray;
}

//chcemy dwie funkcje tego typu wywołać dla empirycznych i teoretycznych
export function calculate_C_Parameter_Array(
  OccurrancesOfNumbersArray,
  sampleSize
) {
  let cArray = [];
  for (const element of OccurrancesOfNumbersArray) {
    cArray.push((element / sampleSize) * 100);
  }
  return cArray;
}

//chcemy dwie funkcje tego typu wywołać dla empirycznych i teoretycznych
export function calculate_P_Parameter_Array(
  OccurrancesOfNumbersArray,
  sampleSize
) {
  let pArray = [];
  for (const element of OccurrancesOfNumbersArray) {
    pArray.push(element / sampleSize);
  }
  return pArray;
}

//chcemy dwie funkcje tego typu wywołać dla empirycznych i teoretycznych
export function calculate_F_Parameter_Array(pArray) {
  let fArray = [];
  pArray.forEach((value, index) => {
    if (index === 0) fArray.push(value);
    else {
      fArray.push(value + pArray[index - 1]);
    }
  });
  return fArray;
}

export function calculate_D_Parameter(empirical_F_Array, theoretical_F_Array) {
  let ArrayOfDifferences = [];
  for (let i = 0; i < empirical_F_Array.length; i++) {
    ArrayOfDifferences.push(
      Math.abs(empirical_F_Array[i] - theoretical_F_Array[i])
    );
  }
  return Math.max(...ArrayOfDifferences);
}

export function calculateChiSquareTest(
  empirical_C_parameter_Array,
  theoretical_C_parameter_Array,
  sampleSize
) {
  let sum = 0;
  for (let i = 0; i < empirical_C_parameter_Array.length; i++) {
    sum +=
      (empirical_C_parameter_Array[i] - theoretical_C_parameter_Array[i]) ** 2 /
      theoretical_C_parameter_Array[i];
  }

  return (sampleSize / 100) * sum;
}

export function calculate_Z_Test(
  pEmpiricalArray,
  pTheoreticalArray,
  sampleSize
) {
  let z_Test_Array = [];
  for (let i = 0; i < pEmpiricalArray.length; i++) {
    z_Test_Array.push(
      (
        (pEmpiricalArray[i] - pTheoreticalArray[i]) /
        Math.sqrt(
          (pTheoreticalArray[i] * (1 - pTheoreticalArray[i])) / sampleSize
        )
      ).toFixed(2)
    );
  }
  return z_Test_Array;
}

export function calculateKolmogorovSmirnovTest(d_Parameter, sampleSize) {
  return d_Parameter * Math.sqrt(sampleSize ** 2 / (2 * sampleSize));
}

//does not apply to D3 test (because theoretical C parameters are exactly the same)
export function calculateCorrelationCoefficient(
  empiricalOccurrancesOfNumbersArray,
  theoreticalOccurancesOfNumbersArray
) {
  let empiricalMeanAverage = 0;
  let theoreticalMeanAverage = 0;
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;

  for (let i = 0; i < empiricalOccurrancesOfNumbersArray.length; i++) {
    empiricalMeanAverage += empiricalOccurrancesOfNumbersArray[i];
    theoreticalMeanAverage += theoreticalOccurancesOfNumbersArray[i];
  }

  empiricalMeanAverage /= empiricalOccurrancesOfNumbersArray.length;
  theoreticalMeanAverage /= theoreticalOccurancesOfNumbersArray.length;

  for (let i = 0; i < empiricalOccurrancesOfNumbersArray.length; i++) {
    sum1 +=
      (empiricalOccurrancesOfNumbersArray[i] - empiricalMeanAverage) *
      (theoreticalOccurancesOfNumbersArray[i] - theoreticalMeanAverage);
  }
  for (let i = 0; i < empiricalOccurrancesOfNumbersArray.length; i++) {
    sum2 += (empiricalOccurrancesOfNumbersArray[i] - empiricalMeanAverage) ** 2;
  }
  for (let i = 0; i < theoreticalOccurancesOfNumbersArray.length; i++) {
    sum3 +=
      (theoreticalOccurancesOfNumbersArray[i] - theoreticalMeanAverage) ** 2;
  }
  return sum1 / Math.sqrt(sum2 * sum3);
}

export function calculate_M1_Test(
  empirical_C_parameter_Array,
  theoretical_C_parameter_Array
) {
  let sum = 0;
  for (let i = 0; i < empirical_C_parameter_Array.length; i++) {
    sum += Math.abs(
      (empirical_C_parameter_Array[i] - theoretical_C_parameter_Array[i]) /
        theoretical_C_parameter_Array[i]
    );
  }

  return (100 / empirical_C_parameter_Array.length) * sum;
}

export function calculate_M2_Test(
  empirical_C_parameter_Array,
  theoretical_C_parameter_Array
) {
  let sum = 0;
  for (let i = 0; i < empirical_C_parameter_Array.length; i++) {
    sum +=
      (empirical_C_parameter_Array[i] - theoretical_C_parameter_Array[i]) ** 2;
  }

  return (1 / empirical_C_parameter_Array.length) * Math.sqrt(sum);
}

export function calculate_M3_Test(
  empirical_C_parameter_Array,
  theoretical_C_parameter_Array
) {
  let sum = 0;
  for (let i = 0; i < empirical_C_parameter_Array.length; i++) {
    sum +=
      (empirical_C_parameter_Array[i] - theoretical_C_parameter_Array[i]) ** 2;
  }

  return Math.sqrt(sum / empirical_C_parameter_Array.length);
}
