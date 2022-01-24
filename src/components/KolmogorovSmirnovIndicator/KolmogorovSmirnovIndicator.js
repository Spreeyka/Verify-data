import { KOLMOGOROV_SMIRNOV_CRITICAL_VALUES } from "../../Utils/Constants";
import { FeedbackIcon } from "../FeedbackIcon/FeedbackIcon";
import styles from "./KolmogorovSmirnovIndicator.module.css";

export function KolmogorovSmirnovIndicator({ value }) {
  return (
    <div className={`${styles.wrapper}`}>
      Kolmogorov-Smirnov test:{" "}
      <span className={`${styles.push}`}>{value.toFixed(2)}</span>
      <FeedbackIcon
        value={value}
        critValue={KOLMOGOROV_SMIRNOV_CRITICAL_VALUES.VALUES[1]}
        operator={`>=`}
      ></FeedbackIcon>
    </div>
  );
}
