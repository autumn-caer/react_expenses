import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props: any) => {

  const dataPointValues = props.dataPoints.map((dataPoint: any) => dataPoint.value)
  const totalMaxValue = Math.max(...dataPointValues)

  // console.log('totalMaxValue__', totalMaxValue)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: any) => (
        <ChartBar 
            key={dataPoint.label}
            value={dataPoint.value} 
            maxValue={totalMaxValue} 
            label={dataPoint.label}/>
      ))}
    </div>
  );
};

export default Chart;
