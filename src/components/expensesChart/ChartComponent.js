import React from "react";
import "./chartComponent.css";

const ChartComponent = (props) => {
  const chartFillingHeight = Math.round((props.value / props.maxValue) * 100);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: chartFillingHeight }}
        ></div>
      </div>
      <div className="label-wrapper">{props.label}</div>
    </div>
  );
};

export default ChartComponent;
