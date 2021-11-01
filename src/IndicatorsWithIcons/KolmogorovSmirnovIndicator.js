import { KOLMOGOROV_SMIRNOV_CRITICAL_VALUES } from "../Utils/Constants";
import { FeedbackIcon } from "../FeedbackIcon";

export function KolmogorovSmirnovIndicator({ value }) {
  return (
    <p>
      Kolmogorov-Smirnov test: {value.toFixed(2)}
      <FeedbackIcon
        value={value}
        critValue={KOLMOGOROV_SMIRNOV_CRITICAL_VALUES.VALUES[1]}
        operator={`>=`}
      ></FeedbackIcon>
    </p>
  );
}
