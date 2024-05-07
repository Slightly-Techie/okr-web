"use client";

import Link from "next/link";
import Backdrop from "./Backdrop";
import OAuth from "./OAuth";
import Or from "./Or";
import Heading from "./Heading";

export default function ForgotPassword() {
  function handleSubmit() {}

  return (
    <main className="w-screen flex max-w-container">
      <Backdrop />
      
      <section className="w-full md:w-1/2 h-screen z-10">
        <article className="flex flex-col gap-2 justify-center h-full w-4/5 mx-auto">
          <Heading
            title="Forgot your password? 🤯"
            message="Not a problem! It happens to the best of us."
          />{" "}
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="email">
              {" "}
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <span className="text-sm text-[#777777]">
                We will send you an email with instructions on how to reset your
                password.
              </span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-2 outline-none border boder-[#9EA1AB] w-full h-8 px-2 text-[#9EA1AB] font-light placeholder:font-light  placeholder:text-[#9EA1AB] rounded-md"
              />
            </div>

            <button
              type="submit"
              className="bg-primary-base text-white py-[6px] mt-2 rounded-md"
            >
              Submit
            </button>
          </form>
          <Or />
          <OAuth />
          <span className="flex gap-2 mt-1">
            <p className="text-[#1E1E1E]">Don’t have an account?</p>
            <Link href="/auth/signup" className="text-[#111926] font-bold">
              Sign up
            </Link>
          </span>
        </article>
      </section>
    </main>
  );
}
