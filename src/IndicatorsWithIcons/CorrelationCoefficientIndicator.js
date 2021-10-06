import { CORRELATION_CRITICAL_VALUES } from "../Constants";
import { FeedbackIcon } from "../FeedbackIcon";

export function CorrelationCoefficientIndicator({ value, index }) {
  return (
    <>
      {index !== 2 ? (
        <p className="correlation-header">
          Correlation coefficient: {value.toFixed(2)}
          <FeedbackIcon
            value={Math.abs(value)}
            critValue={CORRELATION_CRITICAL_VALUES.VALUES[2]}
            operator={`<`}
          ></FeedbackIcon>
        </p>
      ) : null}
    </>
  );
}
