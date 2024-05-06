import { LiaUserSolid } from "react-icons/lia";
import { VscTarget } from "react-icons/vsc";
import { FiKey } from "react-icons/fi";
import PieChart from "@/components/dashboard/PieChart";
import BarChart from "@/components/dashboard/BarChart";

const results = [
  { title: "Users", count: 5, icon: <LiaUserSolid /> },
  { title: "Objectives", count: 5, icon: <VscTarget /> },
  { title: "Key Results", count: 5, icon: <FiKey /> },
];

export default function Page() {
  return (
    <main className="bg-[#f6f9fd] min-h-[93vh] pb-8 flex flex-col">
      <section className="header bg-white px-2 md:px-6 py-3 w-full text-dark">
        <h1 className="font-medium text-base">Company Dashboard</h1>
        <select className="mt-1 w-[160px] shadow-sm p-2 rounded-md outline-none">
          <option>All Departments</option>
          <option>Tech Department</option>
          <option>HR Department</option>
          <option>Security Department</option>
        </select>
      </section>
      <section className="results px-2 md:px-6 mt-4 md:mt-8 flex flex-wrap gap-4 justify-between">
        {results.map((result, index) => (
          <article
            key={index}
            className="flex items-center justify-between p-4 flex-1 min-w-[150px] md:min-w-[300px] bg-white rounded-md font-semibold text-base"
          >
            <div>
              <h2>{result.count}</h2>
              <h3 className="text-neutral-500">{result.title}</h3>
            </div>
            <span className="text-4xl md:text-5xl opacity-70">
              {result.icon}
            </span>
          </article>
        ))}
      </section>
      <PieChart />
      <BarChart />
    </main>
  );
}
