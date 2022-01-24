import { Z_TEST_CRITICAL_VALUES } from "../../Utils/Constants";
import { FeedbackIcon } from "../FeedbackIcon/FeedbackIcon";
import styles from "./ZTestIndicator.module.css";

export function ZTestIndicator({ value }) {
  return (
    <>
      <p>Z test</p>
      <div className={`${styles.wrapper}`}>
        {value.join(" ")}
        <FeedbackIcon
          value={
            value.filter((x) => Math.abs(x) > Z_TEST_CRITICAL_VALUES.VALUES[1])
              .length
          }
          //Two distributions are most likely differrent, if more than 4 out of 10 digits does not fulfill condition
          critValue={4}
          operator={`>`}
        ></FeedbackIcon>{" "}
      </div>
    </>
  );
}
