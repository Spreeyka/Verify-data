import { KOLMOGOROV_SMIRNOV_CRITICAL_VALUES } from "../../Utils/Constants";
import { FeedbackIcon } from "../FeedbackIcon";

export function KolmogorovSmirnovIndicator({ value }) {
  return (
    <div className="space-container smirnov-container">
      Kolmogorov-Smirnov test: <span className="push">{value.toFixed(2)}</span>
      <FeedbackIcon
        value={value}
        critValue={KOLMOGOROV_SMIRNOV_CRITICAL_VALUES.VALUES[1]}
        operator={`>=`}
      ></FeedbackIcon>
    </div>
  );
}
