import React from "react";

function Features() {
  return (
    <section className="w-full h-full">
      <section className="max-w-screen-xl mx-auto my-16">
        <section className="w-full h-full border-l border-r border-b border-dashed">
          <section className="border-b border-dashed p-8">
            <h1 className="text-2xl lg:text-3xl font-semibold">
              Transforming Goals into Results.
            </h1>
          </section>
          <section className="w-full h-full flex flex-col lg:flex-row items-center">
            {/* Left Side */}
            <section className="lg:w-[50%] h-full lg:border-r border-b lg:border-b-0 border-dashed px-8 py-16 relative">
              <img
                src="https://mintlify.com/_next/image?url=%2Fassets%2Fvalues%2Fdark%2Fgorgeous.png&w=640&q=75"
                alt="img-2"
              />
              <br />
              <h1 className="text-xl lg:text-2xl font-semibold">
                Align Objectives
              </h1>
              <p className="my-3 ">
                Ensure everyone is working towards the same goals with clear and
                aligned objectives.
              </p>
            </section>
            {/* Middle Side */}
            <section className="lg:w-[50%] h-full px-8 py-16 relative lg:border-r border-b lg:border-b-0 border-dashed">
              <img
                src="https://mintlify.com/_next/image?url=%2Fassets%2Fvalues%2Fdark%2Fgorgeous.png&w=640&q=75"
                alt="img-2"
              />
              <br />
              <h1 className="text-xl lg:text-2xl font-semibold">
                Track Key Results
              </h1>
              <p className="my-3">
                Monitor your progress easily with our tracking tools.
              </p>
            </section>
            {/* Right Side */}
            <section className="lg:w-[50%] h-full px-8 py-16 relative">
              <img
                src="https://mintlify.com/_next/image?url=%2Fassets%2Fvalues%2Fdark%2Fgorgeous.png&w=640&q=75"
                alt="img-2"
              />
              <br />
              <h1 className="text-xl lg:text-2xl font-semibold">
                Collaborate Effectively
              </h1>
              <p className="my-3 ">
                Collaborate with your team and keep everyone in sync.
              </p>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Features;
