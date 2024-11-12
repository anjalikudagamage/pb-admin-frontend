import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Sample data for Photographer Performance
const data = [
  { month: "Jan", bookingsReceived: 20, packagesCompleted: 15 },
  { month: "Feb", bookingsReceived: 30, packagesCompleted: 22 },
  { month: "Mar", bookingsReceived: 35, packagesCompleted: 28 },
  { month: "Apr", bookingsReceived: 45, packagesCompleted: 33 },
  { month: "May", bookingsReceived: 50, packagesCompleted: 40 },
  { month: "Jun", bookingsReceived: 40, packagesCompleted: 35 },
  { month: "Jul", bookingsReceived: 55, packagesCompleted: 45 },
];

const PhotographerPerformanceChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="month" stroke="#aaa" />
        <YAxis stroke="#aaa" />
        <Tooltip
          contentStyle={{ backgroundColor: "#2d2d3a", borderColor: "#555" }}
          labelStyle={{ color: "#fff" }}
        />
        <Legend verticalAlign="top" align="right" iconType="line" />
        <Line
          type="monotone"
          dataKey="bookingsReceived"
          stroke="#8884d8"
          strokeWidth={2}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
          name="Bookings Received"
        />
        <Line
          type="monotone"
          dataKey="packagesCompleted"
          stroke="#82ca9d"
          strokeWidth={2}
          dot={{ r: 5 }}
          strokeDasharray="3 4"
          name="Packages Completed"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PhotographerPerformanceChart;
