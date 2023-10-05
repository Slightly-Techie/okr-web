"use client";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <main className=" w-full bg-primary-700 h-screen grid place-content-center">
      <h1 className=" text-6xl text-slate-50 font-bold">
        Welcome to the OKR Project
      </h1>
    </main>
  );
}
