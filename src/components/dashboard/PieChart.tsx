"use client";

import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const data02 = [
  {
    name: "Pending",
    value: 4,
    color: "#047358",
  },
  {
    name: "Complete",
    value: 2,
    color: "#033F30",
  },
  {
    name: "Failed",
    value: 1,
    color: "#111926",
  },
];

const okrDetailsL = [
  { name: "Not Started", value: 0 },
  { name: "At Risk", value: 0 },
  { name: "Completed", value: 0 },
  { name: "Pending Submission", value: 0 },
  { name: "Revisions Requested", value: 0 },
];

const okrDetailsR = [
  { name: "On Track", value: 0 },
  { name: "In Trouble", value: 0 },
  { name: "Archived", value: 0 },
  { name: "Pending Approval", value: 0 },
  { name: "Pending Delete", value: 0 },
];

export default function PieCharts() {
  return (
    <section className="pie-charts mt-8 rounded-md  flex flex-col md:flex-row justify-around items-center gap-4 mx-2 md:mx-6 overflow-x-hidden">
      <article className="w-full md:w-1/2 h-[430px] bg-white flex flex-col justify-center items-start rounded-md">
        <h1 className="font-semibold mt-2 px-4">Overall OKR Progress</h1>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart className="w-full">
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={100}
            >
              {data02.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* keys to piechart */}
        <div className="keys mt-2 flex gap-3 px-4 text-[10px]">
          <div className="flex gap-1 items-center">
            <div className="w-3 h-3 bg-primary-100"></div>
            <p>Pending</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-3 bg-primary-700"></div>
            <p>Complete</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-3 bg-[#111926]"></div>
            <p>Failed</p>
          </div>
        </div>

        {/* details of okr */}
        <div className="w-full flex justify-between gap-4 text-[10px] px-4 mt-4">
          <div className="w-1/2 flex gap-1 flex-col flex-wrap justify-between">
            {okrDetailsL.map((detail, index) => (
              <div key={index} className="flex justify-between">
                <span>{detail.name}</span>
                <span>{detail.value}</span>
              </div>
            ))}
          </div>
          <div className="w-1/2 flex gap-1 flex-col  flex-wrap justify-between">
            {okrDetailsR.map((detail, index) => (
              <div key={index} className="flex justify-between">
                <span>{detail.name}</span>
                <span>{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </article>
      <article className="w-full md:w-1/2 h-[430px] bg-white flex flex-col items-start rounded-md">
        <h1 className="font-semibold mt-4 px-4">
          Remaining OKRs vs Achieved OKRs
        </h1>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart className="w-full">
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={100}
            >
              {data02.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="keys mt-2 flex gap-3 px-4 text-[10px]">
          <div className="flex gap-1 items-center">
            <div className="w-3 h-3 bg-primary-100"></div>
            <p>Pending</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-3 bg-primary-700"></div>
            <p>Complete</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-3 bg-[#111926]"></div>
            <p>Failed</p>
          </div>
        </div>
      </article>
    </section>
  );
}
