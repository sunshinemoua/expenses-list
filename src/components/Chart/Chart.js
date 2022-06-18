import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint, index) => (
        <div key={index}>
          <ChartBar
            key={dataPoint.id}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
          />
        </div>
      ))}
    </div>
  );
};

export default Chart;