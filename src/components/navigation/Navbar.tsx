"use client";

import { FiLogOut, FiTarget } from "react-icons/fi";
import { ReactNode, useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiFillSetting } from "react-icons/ai";
import Link from "next/link";

type NavbarProps = {
  children: ReactNode;
};

const NavLinks = [
  {
    title: "Home",
    icon: <AiOutlineHome size={20} />,
    links: [
      {
        id: "h1",
        name: "Dashboard",
        link: "/",
      },
      {
        id: "h2",
        name: "Alignments",
        link: "/",
      },
    ],
  },
  {
    title: "OKRs",
    icon: <FiTarget size={20} />,
    links: [
      {
        id: "O1",
        name: "All OKRs",
        link: "/okr/all-okrs",
      },
      {
        id: "O2",
        name: "Assigned to Me",
        link: "/",
      },
    ],
  },
];

function Navbar({ children }: NavbarProps) {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
  return (
    <section>
      {/* Top Navbar */}
      <nav className="fixed z-[40] w-full h-[7vh] p-5 bg-primary-100 text-white lg:bg-white lg:text-black border-b">
        <section className="flex w-full justify-between items-center h-full">
          {/* Left */}
          <section className="lg:w-[calc(15%-1.25em)] lg:border-r">
            <h1 className="text-primary font-bold text-lg lg:text-xl">OKR.</h1>
          </section>
          {/* Right */}
          <section className="lg:hidden text-white text-2xl border border-white rounded flex justify-center items-center p-1">
            <button
              onClick={() => setNavIsOpen(!navIsOpen)}
              className="appearance-none outline-none"
            >
              <AiOutlineMenu />
            </button>
          </section>
        </section>
      </nav>
      {/* Side Navbar */}
      <section className="flex w-full">
        <nav className="hidden lg:block lg:w-[15%] h-[93vh] p-4 fixed top-[7vh] left-0 z-[40] bg-primary-100 text-white">
          <section className="flex flex-col justify-between items-center h-full">
            {/* Top Section */}
            <section className="w-full">
              {NavLinks.map((link) => {
                return (
                  <section key={link.title} className="my-5">
                    <section className="flex items-center gap-3">
                      {link.icon}
                      <p className="text-complementary text-sm">{link.title}</p>
                    </section>
                    <section className="flex flex-col gap-y-5 p-3">
                      {link.links.map((item) => {
                        return (
                          <Link href={item.link} key={item.id}>
                            <section className="flex items-center gap-3">
                              <p className="font-semibold text-sm">
                                {item.name}
                              </p>
                            </section>
                          </Link>
                        );
                      })}
                    </section>
                  </section>
                );
              })}
            </section>
            <section className="w-full">
              <Link
                href="/app/help"
                className="flex items-center p-2 text-white rounded-lg my-3"
              >
                <AiFillSetting size={20} />
                <p className="ml-3 font-semibold">Settings</p>
              </Link>
              <Link
                href="/app/help"
                className="flex items-center p-2 text-white rounded-lg my-3"
              >
                <FiLogOut size={20} />
                <p className="ml-3 font-semibold">Log Out</p>
              </Link>
            </section>
          </section>
        </nav>
        <section className="lg:pl-[15%] pt-[7vh] w-full">
          <section className="w-full">{children}</section>
        </section>
      </section>
      {/* Navbar for Mobile */}
      <section
        className={
          navIsOpen
            ? "lg:hidden fixed z-[30] h-fit pt-[7vh] bg-primary-100 border-b w-full top-0 left-0 ease duration-500"
            : "lg:hidden fixed z-[30] h-fit pt-[7vh] bg-primary-100 border-b w-full top-[-100vh] left-0 ease duration-500"
        }
      >
        <section className="h-full bg-primary text-white flex flex-col p-5">
          {NavLinks.map((link) => {
            return (
              <section key={link.title} className="my-5">
                <section className="flex items-center gap-3">
                  {link.icon}
                  <p className="text-complementary font-bold text-sm">
                    {link.title}
                  </p>
                </section>
                <section className="flex flex-col gap-y-5 p-3">
                  {link.links.map((item) => {
                    return (
                      <Link href={item.link} key={item.id}>
                        <section className="flex items-center gap-3">
                          <p className="font-semibold text-sm">{item.name}</p>
                        </section>
                      </Link>
                    );
                  })}
                </section>
              </section>
            );
          })}
        </section>
      </section>
    </section>
  );
}

export default Navbar;
