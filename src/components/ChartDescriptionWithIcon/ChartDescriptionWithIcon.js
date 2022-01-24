import React from "react";
import { Popover } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import styles from "./ChartDescriptionWithIcon.module.css";

export function ChartDescriptionWithIcon({ numberOfAnalysedData }) {
  return (
    <OverlayTrigger
      trigger={["hover", "focus"]}
      placement={`bottom`}
      overlay={
        <Popover id={`popover-positioned-top`}>
          <Popover.Body>
            <div className={`${styles["sample-warning"]}`}>
              Small sample size might cause incorrect results
            </div>
          </Popover.Body>
        </Popover>
      }
    >
      <div className={`${styles["header"]}`}>
        <span className={`${styles["bold-700"]}`}>{numberOfAnalysedData}</span>
        <span className={`${styles["analysed-numbers"]}`}>
          analysed numbers
        </span>
        {numberOfAnalysedData < 100 ? (
          <span
            className={`material-icons notification ${styles["material-icons"]} ${styles["notification"]}`}
          >
            help
          </span>
        ) : null}
      </div>
    </OverlayTrigger>
  );
}
