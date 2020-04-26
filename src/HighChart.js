import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Legend,
  SplineSeries
} from "react-jsx-highcharts";
// We need to study Highcharts docs for cofiguration in JSON formate..
// click on this link (Ctrl +  left click)  https://api.highcharts.com/highcharts/
const plotOptions = {
  series: {
   
  }
};
const categories = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const labels = {
  style: {
    fontSize: "20px"
  }
};
const marker = {
  symbol: "circle"
};

const HighChart = (props) => (
  <div
    className="app"
    style={{
      marginLeft: "200px",
      marginRight: "200px",
      fontSize: "20px",
      width: "1400px"
    }}
  >
    <HighchartsChart
      plotOptions={plotOptions}
      tooltip={""}
      marginLeft={300}
    >
      <Chart height={300} />
      <Title align="center">CVE Analysis for 2015</Title>
      <XAxis categories={categories} lable={labels}>
        <XAxis.Title>Month</XAxis.Title>
      </XAxis>
      <Legend
        layout="horizontal"
        align="right"
        verticalAlign="top"
        borderWidth={0}
        symbolRadius={0}
        symbolWidth={5}
      />
      <YAxis>
        <YAxis.Title>{"Number of occurences"}</YAxis.Title>
        <SplineSeries
          name="LOW"
          data={[
            7.0,
            6.9,
            9.5,
            14.5,
            18.2,
            21.5,
            25.2,
            26.5,
            23.3,
            18.3,
            13.9,
            9.6
          ]}
          marker={marker}
        />

        <SplineSeries
          name="HIGH"
          data={[
            -0.9,
            0.6,
            3.5,
            8.4,
            13.5,
            17.0,
            18.6,
            17.9,
            14.3,
            9.0,
            3.9,
            1.0
          ]}
          marker={marker}
        />
      </YAxis>
    </HighchartsChart>
  </div>
);
export default withHighcharts(HighChart, Highcharts);



