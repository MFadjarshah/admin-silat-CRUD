import "./revchart.scss";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

//DATA
const data = [
  {
    name: "Jan",
    Paid: 4000,
    Total: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    Paid: 3000,
    Total: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    Paid: 2000,
    Total: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    Paid: 2780,
    Total: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Paid: 1890,
    Total: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    Paid: 2390,
    Total: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    Paid: 3490,
    Total: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    Paid: 3490,
    Total: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    Paid: 3490,
    Total: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    Paid: 3490,
    Total: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    Paid: 3490,
    Total: 4300,
    amt: 2100,
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
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Paid" stackId="a" fill="#8884d8" />
          <Bar dataKey="Total" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Revchart;
