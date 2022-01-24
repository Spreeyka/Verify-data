import { CHI_SQUARE_CRITICAL_VALUES } from "../../Utils/Constants";
import { FeedbackIcon } from "../FeedbackIcon/FeedbackIcon";
import styles from "./ChiSquareIndicator.module.css";

export function ChiSquareIndicator({ value, chartConstant }) {
  return (
    <div className={`${styles.wrapper}`}>
      Chi square test:{" "}
      <span className={`${styles.push}`}>{value.toFixed(2)}</span>
      <FeedbackIcon
        value={value}
        critValue={CHI_SQUARE_CRITICAL_VALUES[chartConstant][2]}
        operator={`>=`}
      ></FeedbackIcon>
    </div>
  );
}
