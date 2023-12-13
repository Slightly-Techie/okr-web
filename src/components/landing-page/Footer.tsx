import Link from "next/link";

const pageLinks = [
  {
    id: 0,
    name: "About",
    href: "/about",
  },
  {
    id: 1,
    name: "Pricing",
    href: "/pricing",
  },
  {
    id: 2,
    name: "Help",
    href: "/help",
  },
];

function Footer() {
  return (
    <section className="bg-primary-base text-white">
      <section className="w-full max-w-screen-xl mx-auto p-5 xl:px-0 md:py-8">
        <h1 className="text-2xl lg:text-3xl font-semibold">
          Ready to make a change?
        </h1>
        <p className="my-3">
          Get started with our OKR software today and join the many teams who
          are streamlining their OKR process.
        </p>
      </section>
      <footer className="w-full">
        <div className="w-full max-w-screen-xl mx-auto p-5 xl:px-0 md:py-8">
          <hr className="my-6 sm:mx-auto border lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                <section className="flex items-center gap-2">
                  <p className="font-semibold text-lg text-jetbrains">ST-OKR</p>
                </section>
              </span>
            </a>
            <ul className="flex flex-wrap gap-5 items-center mb-6 text-sm font-medium sm:mb-0">
              {pageLinks.map((item) => {
                return (
                  <Link href={`${item.href}`} key={item.id}>
                    {item.name}
                  </Link>
                );
              })}
            </ul>
          </div>
          <span className="block text-sm ">
            © 2023{" "}
            <a href="3" className="hover:underline">
              ST-OKR™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
