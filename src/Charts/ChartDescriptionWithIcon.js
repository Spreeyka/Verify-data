import React from "react";
import { Popover } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";

export function ChartDescriptionWithIcon({ numberOfAnalysedData }) {
  return (
    <OverlayTrigger
      trigger={["hover", "focus"]}
      placement={`bottom`}
      overlay={
        <Popover id={`popover-positioned-top`}>
          <Popover.Body>
            <div className="sample-warning">
              Small sample size might cause incorrect results
            </div>
          </Popover.Body>
        </Popover>
      }
    >
      <div className="chart-header">
        <span>{`Number of analysed data: ${numberOfAnalysedData}`}</span>
        {numberOfAnalysedData < 100 ? (
          <span className="material-icons notification">help</span>
        ) : null}
      </div>
    </OverlayTrigger>
  );
}