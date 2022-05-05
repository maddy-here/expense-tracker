import React from "react";
import Card from "../UI/Card";
import ChartComponent from "./ChartComponent";
import "./chart.css";
const chartDataPoints = [
  {
    value: 0,
    label: "jan",
  },
  {
    value: 0,
    label: "feb",
  },
  {
    value: 0,
    label: "mar",
  },
  {
    value: 0,
    label: "apr",
  },
  {
    value: 0,
    label: "may",
  },
  {
    value: 0,
    label: "jun",
  },
  {
    value: 0,
    label: "jul",
  },
  {
    value: 0,
    label: "aug",
  },
  {
    value: 0,
    label: "sep",
  },
  {
    value: 0,
    label: "oct",
  },
  {
    value: 0,
    label: "nov",
  },
  {
    value: 0,
    label: "dec",
  },
];
const Chart = (props) => {
  props.expenses.forEach((expense) => {
    const month = expense.date.getMonth();
    chartDataPoints[month].value = expense.amount;
  });

  const values = chartDataPoints.map((data) => data.value);
  const maxValue = Math.max(...values);
  return (
    <Card className="chart-wrapper">
      {chartDataPoints.map((data) => {
        return (
          <ChartComponent
            key={data.label}
            label={data.label}
            value={data.value}
            maxValue={maxValue}
          />
        );
      })}
    </Card>
  );
};

export default Chart;
