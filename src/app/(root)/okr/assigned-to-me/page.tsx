import PageTitle from "@/components/ui/PageTitle";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

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
      <PageTitle title="Assigned To Me" />
      <section className="relative overflow-x-auto">
        <section className="pt-[5vh] w-full ">
          <section className="w-full p-5">
            {/* Table */}
            <table className="w-full">
              {/* Table Heading */}
              <thead>
                <tr className="bg-accent-green">
                  {THeadTitles.map((item) => {
                    return (
                      <th
                        scope="col"
                        className="px-1 md:px-6 py-3 whitespace-nowrap"
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
                  <tr key={index} className="mt-10 even:bg-accent-green">
                    <td
                      scope="col"
                      className="px-6 py-3 text-center whitespace-nowrap"
                    >
                      {item.objectives}
                    </td>
                    <td
                      scope="col"
                      className="px-6 py-3 text-center whitespace-nowrap"
                    >
                      {item.dateAssigned}
                    </td>
                    <td
                      scope="col"
                      className="px-6 py-3 text-center whitespace-nowrap"
                    >
                      {item.assignedBy}
                    </td>
                    <td
                      scope="col"
                      className="px-6 py-3 text-center whitespace-nowrap"
                    >
                      {item.keyResults}
                    </td>
                    <td
                      scope="col"
                      className="px-6 py-3 text-center whitespace-nowrap"
                    >
                      <div className="w-full h-2 rounded-full bg-[#F8F8F8]">
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
      <div className="fixed bottom-0 right-0 m-5">
        <section className="flex gap-5">
          <section className="bg-primary-100 text-white rounded-full p-3 hover:scale-105 duration-300 ease-in">
            <BsChevronLeft />
          </section>
          <section className="bg-primary-100 text-white rounded-full p-3 hover:scale-105 duration-300 ease-in">
            <BsChevronRight />
          </section>
        </section>
      </div>
    </section>
  );
}

export default Page;
