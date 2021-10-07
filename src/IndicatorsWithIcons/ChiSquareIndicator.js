import { CHI_SQUARE_CRITICAL_VALUES } from "../Constants";
import { FeedbackIcon } from "../FeedbackIcon";

export function ChiSquareIndicator({ value, chartConstant }) {
  return (
    <p>
      Chi square test: {value.toFixed(2)}
      <FeedbackIcon
        value={value}
        critValue={CHI_SQUARE_CRITICAL_VALUES[chartConstant][2]}
        operator={`>=`}
      ></FeedbackIcon>
    </p>
  );
}
