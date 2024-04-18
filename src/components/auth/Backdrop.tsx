import Image from "next/image";
import lines from "../../assets/big_circular_lines.svg";

export default function Backdrop() {
  return (
    <section className="w-1/2 bg-primary-100 text-white h-screen relative hidden md:block">
      <div className="pt-6 pl-12 flex flex-col">
        <h1 className="font-semibold text-2xl">
          A Game-Changing Approach to <br /> Goal Achievement
        </h1>
        <p className="mt-2 text-lg">
          The simplest way to supercharge your workforce with OKRs
        </p>
      </div>
      <div className="absolute bottom-0">
        <Image src={lines} alt="lines" className="w-[70%]" priority />
      </div>
    </section>
  );
}
