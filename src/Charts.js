import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Charts(props) {
  return (
    <LineChart
      width={600}
      height={400}
      data={props.props}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="6 6" stroke="white" />
      <XAxis dataKey="number" stroke="white" />
      <YAxis stroke="white" />
      <Tooltip />
      <Legend iconSize={20} verticalAlign="bottom" />
      <Line
        type="monotone"
        name="Benfords Values"
        dataKey="benfordsValue"
        legendType="plainline"
        stroke="green"
        activeDot={{ r: 9 }}
        strokeWidth={4}
      />
      <Line
        type="monotone"
        name="API Values"
        dataKey="calculatedData"
        stroke="red"
        legendType="plainline"
        strokeWidth={4}
      />
    </LineChart>
  );
}
