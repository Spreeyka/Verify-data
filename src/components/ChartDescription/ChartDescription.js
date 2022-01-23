import { TITLES } from "../../Utils/Constants";
import { ChartDescriptionWithIcon } from "../ChartDescriptionWithIcon/ChartDescriptionWithIcon";

export function ChartDescription({ numberOfAnalysedData, index }) {
  const title = TITLES[index];

  return numberOfAnalysedData < 100 ? (
    <div className="chart-header">
      <div>{title}</div>
      <ChartDescriptionWithIcon
        numberOfAnalysedData={numberOfAnalysedData}
      ></ChartDescriptionWithIcon>
    </div>
  ) : (
    <div className="chart-header">
      <div>{title}</div>

      <span className="bold-700">{numberOfAnalysedData}</span>
      <span className="analysed-numbers">analysed numbers</span>
    </div>
  );
}
