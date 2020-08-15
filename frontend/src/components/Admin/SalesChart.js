import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { Title } from "@devexpress/dx-react-chart-material-ui";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  SplineSeries,
} from "@devexpress/dx-react-chart-material-ui";
import theme from "../../theme";

const data = [
  { argument: 1, value: 50 },
  { argument: 2, value: 20 },
  { argument: 3, value: 30 },
  { argument: 4, value: 70 },
  { argument: 5, value: 60 },
  { argument: 6, value: 50 },
  { argument: 7, value: 45 },
  { argument: 8, value: 20 },
  { argument: 9, value: 69 },
  { argument: 10, value: 70 },
  { argument: 11, value: 60 },
  { argument: 12, value: 75 },
];

export default () => (
  <Paper>
    <Chart data={data}>
      <ArgumentAxis />
      <ValueAxis />
      {/* <Title text="Sales Report"/> */}

      <SplineSeries valueField="value" argumentField="argument" />
    </Chart>
  </Paper>
);
