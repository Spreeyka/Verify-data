import { Z_TEST_CRITICAL_VALUES } from "../Constants";
import { FeedbackIcon } from "../FeedbackIcon";

export function ZTestIndicator({ value }) {
  return (
    <>
      Z test
      <p>
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
      </p>
    </>
  );
}
