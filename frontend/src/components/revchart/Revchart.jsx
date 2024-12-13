import "./revchart.scss";
import React from "react";
import {
  BarChart,
  Bar,
  // Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
} from "recharts";

//DATA
const data = [
  {
    name: "MAQ",
    Red: 0,
    Orange: 2,
    Green: 3,
    // amt: 2,
  },
  {
    name: "ALP",
    Red: 0,
    Orange: 1,
    Green: 4,
    // amt: 2210,
  },
  {
    name: "IRR",
    Red: 0,
    Orange: 1,
    Green: 4,
    // amt: 2290,
  },
  {
    name: "DET-Cooler",
    Red: 1,
    Orange: 2,
    Green: 2,
    // amt: 2000,
  },
  {
    name: "INTER",
    Red: 0,
    Orange: 1,
    Green: 4,
    // amt: 2181,
  },
  {
    name: "Optical Unit",
    Red: 0,
    Orange: 0,
    Green: 5,
    // amt: 2500,
  },
  {
    name: "PXE",
    Red: 0,
    Orange: 2,
    Green: 3,
    // amt: 2100,
  },
];

const Revchart = ({ aspect, title }) => {
  return (
    <div className="Revchart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            label={{
              value: "Subassemblies",
              position: "insideBottom",
              offset: -20,
            }}
          />
          <YAxis
            label={{ value: "Frequency", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          {/* <Legend /> */}
          {/* <Bar dataKey="Paid" stackId="a" fill="#8884d8" />
          <Bar dataKey="Total" stackId="a" fill="#82ca9d" /> */}
          <Bar dataKey="Green" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Orange" stackId="a" fill="#FFA500" />
          <Bar dataKey="Red" stackId="a" fill="#FF0000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Revchart;
