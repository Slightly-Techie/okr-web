'use client';
import { signIn } from "next-auth/react";


export default function Home() {
  return (
    <main className=" w-full bg-green-950 h-screen grid place-content-center">
      <h1 className=" text-6xl text-slate-50 font-bold">
        Welcome to the OKR Project
      </h1>
      <button className="bg-white rounded-xl px-3 py-3 text-green-700 absolute top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%]" onClick={() => signIn('google')}>sign in with google</button>
    </main>
  );
}
