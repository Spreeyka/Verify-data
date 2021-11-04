import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartDescription } from "./ChartDescription";

export default function Chart({ data, numberOfAnalysedData }) {
  return (
    <div>
      <ChartDescription
        numberOfAnalysedData={numberOfAnalysedData}
      ></ChartDescription>
      <div>
        <ResponsiveContainer aspect={1.5} width="99%" height="100%">
          <LineChart
            data={data}
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
              name="Data Values"
              dataKey="calculatedData"
              stroke="red"
              legendType="plainline"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
