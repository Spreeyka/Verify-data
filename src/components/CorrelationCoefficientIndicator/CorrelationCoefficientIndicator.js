import { CORRELATION_CRITICAL_VALUES } from "../../Utils/Constants";
import { FeedbackIcon } from "../FeedbackIcon/FeedbackIcon";
import styles from "./CorrelationCoefficientIndicator.module.css";

export function CorrelationCoefficientIndicator({ value, index }) {
  const INDEX_OF_CHART_TO_NOT_APPLY = 2;

  return (
    <>
      {index !== INDEX_OF_CHART_TO_NOT_APPLY ? (
        <div className={`${styles.wrapper}`}>
          Correlation coefficient:{" "}
          <span className={`${styles.push}`}>{value.toFixed(2)}</span>
          <FeedbackIcon
            value={Math.abs(value)}
            critValue={CORRELATION_CRITICAL_VALUES.VALUES[2]}
            operator={`<`}
          ></FeedbackIcon>
        </div>
      ) : null}
    </>
  );
}
