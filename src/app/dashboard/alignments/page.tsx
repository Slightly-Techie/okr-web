import { FiTarget } from "react-icons/fi";

const okrHeadings = [
  { id: 1, title: "OKR/KR Name" },
  { id: 2, title: "Owner" },
  { id: 3, title: "Progress" },
];

const okrs = [
  { name: "Test OKR", owner: "Samson Dadson", progress: "Samson Dadson" },
  { name: "Test OKR", owner: "Samson Dadson", progress: "Samson Dadson" },
  { name: "Test OKR", owner: "Samson Dadson", progress: "Samson Dadson" },
  { name: "Test OKR", owner: "Samson Dadson", progress: "Samson Dadson" },
  { name: "Test OKR", owner: "Samson Dadson", progress: "Samson Dadson" },
  { name: "Test OKR", owner: "Samson Dadson", progress: "Samson Dadson" },
  { name: "Test OKR", owner: "Samson Dadson", progress: "Samson Dadson" },
  { name: "Test OKR", owner: "Samson Dadson", progress: "Samson Dadson" },
  { name: "Test OKR", owner: "Samson Dadson", progress: "Samson Dadson" },
  { name: "Test OKR", owner: "Samson Dadson", progress: "Samson Dadson" },
];

const individualOkrs = [
  "Test OKR ",
  "Test OKR ",
  "Test OKR ",
  "Test OKR ",
  "Test OKR ",
];

export default function Page() {
  return (
    <section>
      <div className="h-[13vh] px-4 flex flex-col justify-center border-b-[0.5px] border-[#A7A5A5]">
        <h1 className="font-medium text-dark">Alignments</h1>
        <select className="mt-2 w-[120px] shadow-sm p-1 rounded-md outline-none">
          <option>Period: Q1</option>
          <option>Period: Q2</option>
          <option>Period: Q3</option>
          <option>Period: Q4</option>
        </select>
      </div>
      <article className="bg-[#f6f9fd] px-2 md:px-4 pb-4 min-h-[80vh] flex gap-y-4 justify-between flex-col md:flex-row">
        <table className="bg-white w-full md:w-[65%] h-20 border-b-[.25px] border-x-[.25px] border-[#A7A5A5]">
          <thead className="text-left text-gray border-b-[0.5px] border-[#C9C9C9]">
            <tr>
              {okrHeadings.map((item) => (
                <th key={item.id} className="p-3 text-sm">
                  {item.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {okrs.map((okr, index) => (
              <tr key={index} className="font-medium text-[12px] md:text-sm">
                <td className="p-3 text-dark">
                  <FiTarget className="inline-block mr-1 mb-1 text-primary-100" />
                  {okr.name}
                </td>
                <td className="p-3 text-black">{okr.owner}</td>
                <td className="p-3 text-black">{okr.progress}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <aside className="flex flex-col px-2 md:w-[30%] font-medium text-sm">
          <div className="individual-okr bg-white">
            <div className="bg-primary-100 py-2 text-white px-2">
              My Individual OKRs
            </div>
            {individualOkrs.map((okr, index) => (
              <p
                key={index}
                className={`px-4 py-[6px] text-dark last:pb-4 ${
                  index === 0 ? "pt-4" : ""
                }`}
              >
                <span>
                  <FiTarget className="inline-block mr-1 mb-[2px] text-primary-100" />
                </span>{" "}
                {okr}
              </p>
            ))}
          </div>
          <div className="user-okr bg-white">
            <div className="bg-primary-100 py-2 text-white px-2">
              Andrew’s OKRs
            </div>
            {individualOkrs.map((okr, index) => (
              <p
                key={index}
                className={`px-4 py-[6px] text-dark ${
                  index === 0 ? "pt-4" : ""
                }`}
              >
                <span>
                  <FiTarget className="inline-block mr-1 mb-[2px] text-primary-100" />
                </span>{" "}
                {okr}
              </p>
            ))}
          </div>
        </aside>
      </article>
    </section>
  );
}
