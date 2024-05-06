"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function BarCharts() {
  const data = [
    {
      name: "MON",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "TUE",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "WED",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "THU",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "FRI",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "SAT",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "SUN",
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <section className="table mt-8 mx-2 md:mx-6 pb-4 bg-white rounded-md px-4">
      <article className="flex justify-between items-center mt-2 border-b border-[#E5E5EF] pb-3">
        <h1 className="font-bold text-lg">OKRs By Department</h1>
        <select className="w-[160px] shadow-sm p-2 rounded-md outline-none">
          <option>Department</option>
          <option>Tech Department</option>
          <option>HR Department</option>
          <option>Security Department</option>
        </select>
      </article>
      <article className="mt-4 w-full">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="5" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis width={50} tickSize={0} />
            <Bar dataKey="pv" fill="#EA4335" barSize={16} />
            <Bar dataKey="pv" fill="#033F30" barSize={16} />
            <Bar dataKey="uv" fill="#FBBC04" barSize={16} />
            <Bar dataKey="uv" fill="#047358" barSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </article>
    </section>
  );
}
