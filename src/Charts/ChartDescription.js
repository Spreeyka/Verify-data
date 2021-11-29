import { ChartDescriptionWithIcon } from "./ChartDescriptionWithIcon";

export function ChartDescription({ numberOfAnalysedData }) {
  return numberOfAnalysedData < 100 ? (
    <ChartDescriptionWithIcon
      numberOfAnalysedData={numberOfAnalysedData}
    ></ChartDescriptionWithIcon>
  ) : (
    <div className="chart-header">
      <span>Number of analysed data:</span>
      <span className="bold-700">{numberOfAnalysedData}</span>
    </div>
  );
}
