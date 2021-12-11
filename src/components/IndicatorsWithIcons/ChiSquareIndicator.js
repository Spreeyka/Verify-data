import { CHI_SQUARE_CRITICAL_VALUES } from "../../Utils/Constants";
import { FeedbackIcon } from "../FeedbackIcon";

export function ChiSquareIndicator({ value, chartConstant }) {
  return (
    <div className="space-container">
      Chi square test: <span className="push">{value.toFixed(2)}</span>
      <FeedbackIcon
        value={value}
        critValue={CHI_SQUARE_CRITICAL_VALUES[chartConstant][2]}
        operator={`>=`}
      ></FeedbackIcon>
    </div>
  );
}
