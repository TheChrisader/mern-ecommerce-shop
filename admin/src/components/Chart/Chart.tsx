import {
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./Chart.scss";

const data = [
  {
    name: "Sunday",
    amt: 400,
  },
  {
    name: "Monday",
    amt: 5000,
  },
  {
    name: "Tuesday",
    amt: 2000,
  },
  {
    name: "Wednesday",
    amt: 4780,
  },
  {
    name: "Thursday",
    amt: 9890,
  },
  {
    name: "Friday",
    amt: 2390,
  },
  {
    name: "Saturday",
    amt: 5000,
  },
];

const Chart = () => {
  return (
    <section className="chart-wrapper">
      <h1 className="chart-title">Revenue From Past Week</h1>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={500} height={400} data={data}>
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7451f8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#7451f8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="amt"
              stroke="#7451f8"
              fillOpacity={1}
              fill="url(#total)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Chart;
