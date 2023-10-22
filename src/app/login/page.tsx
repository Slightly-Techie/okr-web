"use client";

import CircularImage from "@/assets/big_circular_lines.png";
import Image from "next/image";
import Google from "@/assets/googleicon.svg";
import GitHub from "@/assets/githubicon.svg";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="grid grid-cols-[60%_40%] w-full relative max-h-screen h-screen overflow-hidden">
      <section className=" border bg-primary-base">
        <section className="  w-4/5 mx-auto py-5">
          <h2 className=" text-3xl text-primary-100 py-3">
            A Game-Changing Approach to Goal Achievement
          </h2>
          <p className=" text-primary-100">
            The simplest way to supercharge your workforce with OKRs
          </p>
          <div className=" absolute -left-[45%] top-[30%] ">
            <Image src={CircularImage} alt="circles" />
          </div>
        </section>
      </section>
      <section className=" grid place-content-center">
        <section>
          <h1 className=" text-3xl font-bold py-2">Welcome to ST-OKR 🚀</h1>
          <p className=" text-gray-500">
            Enter your credentials to access your account.
          </p>
        </section>
        <form className=" py-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border  border-neutral-400 p-2 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 pt-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-neutral-400 p-2 rounded-md outline-none"
            />
          </div>
          <div className=" pt-4 flex justify-between">
            <span>
              <input type="checkbox" className=" mr-1" />
              <label htmlFor="">Keep me logged in</label>
            </span>
            <button>Forgot Password</button>
          </div>
          <button className=" bg-primary-base p-2 mt-4 rounded-md w-full text-white">
            Reset Password
          </button>
        </form>
        <hr />
        <div>
          <button
            onClick={() => signIn("google")}
            className=" flex gap-4 justify-center  border border-neutral-400 p-2 mt-4 rounded-md w-full text-black"
          >
            <Image src={Google} alt="Google" />
            Sign in with Google
          </button>
          <button className=" flex gap-4 justify-center  border border-neutral-400 p-2 mt-4 rounded-md w-full text-black">
            <Image src={GitHub} alt="GitHub" />
            Sign in with GitHub
          </button>
        </div>
        <p className=" py-2">
          Don't have an account?{" "}
          <Link href={"/signup"} className=" font-bold">
            Sign Up
          </Link>
        </p>
      </section>
    </div>
  );
}
