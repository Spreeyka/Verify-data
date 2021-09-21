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

export default function Chart(props) {
  return (
    <div className="charts-container">
      <h3>{`Number of analysed data: ${props.numberOfAnalysedData}`}</h3>
      <LineChart
        width={600}
        height={350}
        data={props.data}
        margin={{
          top: 15,
          right: 30,
          left: 0,
          bottom: 30,
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
    </div>
  );
}
