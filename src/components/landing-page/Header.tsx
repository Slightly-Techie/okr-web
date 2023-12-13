import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

const Links = [
  {
    id: 0,
    name: "Documentation",
  },
  {
    id: 1,
    name: "Pricing",
  },
  {
    id: 2,
    name: "Contribute",
  },
];

function Header() {
  return (
    <div className="bg-primary-base w-full h-full text-white">
      {/* Navbar - Not Separating it because it's only used here */}
      <nav className="w-full h-[8dvh] fixed top-0 border-b border-dashed bg-primary-base z-[50]">
        <section className="max-w-screen-xl mx-auto h-full">
          <section className="flex justify-between items-center px-3 h-full">
            {/* Left Side */}
            <section>
              <section className="flex items-center gap-2">
                <p className="font-semibold text-lg text-jetbrains">ST-OKR</p>
              </section>
            </section>
            {/* Middle */}
            <section className="hidden lg:block">
              <section className="flex items-center gap-5">
                {Links.map((item) => {
                  return (
                    <p key={item.id} className="text-sm">
                      {item.name}
                    </p>
                  );
                })}
              </section>
            </section>
            {/* End */}
            <section>
              <section className="flex items-center gap-2">
                <Link href={`/auth/login`}>
                  <button className="border rounded-3xl px-4 py-2 text-sm">
                    Sign In
                  </button>
                </Link>
              </section>
            </section>
          </section>
        </section>
      </nav>
      {/* Hero */}
      <section className="w-full h-full py-[5vh]">
        <section className="max-w-screen-xl mx-auto px-5 xl:px-0">
          <section className="w-full h-full pt-16 relative">
            <section className="py-8 w-full flex flex-col md:flex-row justify-between items-center gap-5">
              <section className="w-full md:w-[50%] flex flex-col items-center md:block">
                <section className="text-center md:text-left">
                  <h1 className="text-3xl lg:text-5xl font-semibold mb-4">
                    Align Goals. Measure Performance. Deliver Quality Work.
                  </h1>
                  <p className="text-[#f5f5f5]/70">
                    Boost your performance through goal setting and measurable
                    outcomes with our open-source OKR software.
                  </p>
                </section>
                <section className="flex my-5 gap-5 text-sm">
                  <button>
                    <section className="bg-white text-primary-base w-full h-full px-4 py-2 flex items-center rounded">
                      Get Started{" "}
                    </section>
                  </button>
                  <button className="border px-4 py-2 rounded">
                    Book A Demo
                  </button>
                </section>
              </section>
              <section className="md:w-[45%]">
                <img
                  src="https://mintlify.com/_next/image?url=%2Fassets%2Fhero%2Fdark%2Fguides.png&w=1920&q=75"
                  alt="hero-img"
                  className="rounded-xl"
                />
              </section>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Header;
