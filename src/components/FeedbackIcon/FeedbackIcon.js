import { Popover } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";

export function FeedbackIcon({ value, critValue, operator }) {
  let operators = {
    ">=": function (a, b) {
      return a >= b;
    },
    "<": function (a, b) {
      return a < b;
    },
    ">": function (a, b) {
      return a > b;
    },
  };

  let doesFulfill = operators[operator](value, critValue);

  return (
    <OverlayTrigger
      trigger={["hover", "focus"]}
      placement={`bottom`}
      overlay={
        <Popover id={`popover-positioned-top`}>
          <Popover.Body>
            <div className="sample-warning" data-testid="tooltip">
              {doesFulfill
                ? `According to this parameter, data does not match Benford's distribution`
                : `According to this parameter, data matches Benford's distribution`}
            </div>
          </Popover.Body>
        </Popover>
      }
    >
      {doesFulfill ? (
        <span className="material-icons red">error</span>
      ) : (
        <span className="material-icons green">done</span>
      )}
    </OverlayTrigger>
  );
}
