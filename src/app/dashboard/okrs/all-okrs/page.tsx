import PageTitle from "@/components/ui/PageTitle";
import { FiTarget } from "react-icons/fi";

const THeadTitles = [
  {
    id: 0,
    title: "Objectives",
  },
  {
    id: 1,
    title: "Date Assigned",
  },
  {
    id: 2,
    title: "Assigned By",
  },
  {
    id: 3,
    title: "Key Results",
  },
  {
    id: 4,
    title: "Progress",
  },
];

const TBODY = [
  {
    objectives: "Become the largest IT company in Ghana",
    dateAssigned: "23 July, 2023",
    assignedBy: "Kwesi Dadson",
    keyResults: 4,
    progress: 10,
  },
  {
    objectives: "Become the largest IT company in Ghana",
    dateAssigned: "23 July, 2023",
    assignedBy: "Kwesi Dadson",
    keyResults: 4,
    progress: 10,
  },
  {
    objectives: "Become the largest IT company in Ghana",
    dateAssigned: "23 July, 2023",
    assignedBy: "Kwesi Dadson",
    keyResults: 4,
    progress: 10,
  },
  {
    objectives: "Become the largest IT company in Ghana",
    dateAssigned: "23 July, 2023",
    assignedBy: "Kwesi Dadson",
    keyResults: 4,
    progress: 10,
  },
  {
    objectives: "Become the largest IT company in Ghana",
    dateAssigned: "23 July, 2023",
    assignedBy: "Kwesi Dadson",
    keyResults: 4,
    progress: 10,
  },
  {
    objectives: "Become the largest IT company in Ghana",
    dateAssigned: "23 July, 2023",
    assignedBy: "Kwesi Dadson",
    keyResults: 4,
    progress: 10,
  },
  {
    objectives: "Become the largest IT company in Ghana",
    dateAssigned: "23 July, 2023",
    assignedBy: "Kwesi Dadson",
    keyResults: 4,
    progress: 10,
  },
  {
    objectives: "Become the largest IT company in Ghana",
    dateAssigned: "23 July, 2023",
    assignedBy: "Kwesi Dadson",
    keyResults: 4,
    progress: 10,
  },
  {
    objectives: "Become the largest IT company in Ghana",
    dateAssigned: "23 July, 2023",
    assignedBy: "Kwesi Dadson",
    keyResults: 4,
    progress: 10,
  },
  {
    objectives: "Become the largest IT company in Ghana",
    dateAssigned: "23 July, 2023",
    assignedBy: "Kwesi Dadson",
    keyResults: 4,
    progress: 10,
  },
];

function Page() {
  return (
    <section>
      {/* Header Component */}
      <PageTitle title="All Okrs" />
      <section className="relative">
        <section className="pt-[5vh] w-full ">
          <section className="w-full pt-8 md:p-5">
            {/* Table */}
            <table className="w-screen md:w-full">
              {/* Table Heading */}
              <thead>
                <tr className="bg-accent-green">
                  {THeadTitles.map((item) => {
                    return (
                      <th
                        scope="col"
                        className="px-1 md:px-6 py-3 whitespace-nowrap font-semibold text-[10px] md:text-base"
                        key={item.id}
                      >
                        {item.title}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {TBODY.map((item, index) => (
                  <tr
                    key={index}
                    className="mt-10 even:bg-accent-green text-[10px] md:text-base"
                  >
                    <td
                      scope="col"
                      className="flex px-1 md:px-6 py-3 md:hidden items-center gap-2 text-center whitespace-nowrap"
                    >
                      <div className="flex justify-center items-center">
                        <FiTarget
                          className="text-primary-100 hidden md:inline-block"
                          size={18}
                        />
                        <span>{item.objectives.slice(0, 11) + "..."}</span>
                      </div>
                    </td>
                    <td
                      scope="col"
                      className="hidden px-1 md:px-6 py-3 md:flex items-center gap-2 text-center whitespace-nowrap"
                    >
                      <FiTarget
                        className="text-primary-100 hidden md:inline-block"
                        size={18}
                      />
                      {item.objectives}
                    </td>
                    <td
                      scope="col"
                      className="px-1 md:px-6 py-3 text-center whitespace-nowrap"
                    >
                      {item.dateAssigned}
                    </td>
                    <td
                      scope="col"
                      className="px-1 md:px-6 py-3 text-center whitespace-nowrap"
                    >
                      {item.assignedBy}
                    </td>
                    <td
                      scope="col"
                      className="px-1 md:px-6 py-3 text-center whitespace-nowrap"
                    >
                      {item.keyResults}
                    </td>
                    <td
                      scope="col"
                      className="px-1 md:px-6 py-3 text-center whitespace-nowrap"
                    >
                      <div className="w-full h-[5px] rounded-full bg-[#F8F8F8]">
                        <div className="w-1/2 h-full rounded-full bg-success"></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>
      </section>
      {/* Pagination Buttons */}
      <div className="mt-5 flex gap-6 justify-center items-center pb-4">
        <button className="bg-[#F7F7F7] px-6 md:px-10 py-1 rounded border-[0.25px] border-gray">
          Oldest
        </button>
        <button className="bg-[#F7F7F7] px-6 md:px-10 py-1 rounded border-[0.25px] border-gray">
          Newest
        </button>
      </div>
    </section>
  );
}

export default Page;
