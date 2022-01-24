import { TITLES } from "../../Utils/Constants";
import { ChartDescriptionWithIcon } from "../ChartDescriptionWithIcon/ChartDescriptionWithIcon";
import styles from "./ChartDescription.module.css";

export function ChartDescription({ numberOfAnalysedData, index }) {
  const title = TITLES[index];

  return numberOfAnalysedData < 100 ? (
    <div className={`${styles["header"]}`}>
      <div>{title}</div>
      <ChartDescriptionWithIcon
        numberOfAnalysedData={numberOfAnalysedData}
      ></ChartDescriptionWithIcon>
    </div>
  ) : (
    <div className={`${styles["header"]}`}>
      <div>{title}</div>
      <span className={`${styles["bold-700"]}`}>{numberOfAnalysedData}</span>
      <span className={`${styles["analysed-numbers"]}`}>analysed numbers</span>
    </div>
  );
}
