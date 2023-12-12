import Marquee from "react-fast-marquee";

const Companies = () => {
  return (
    <main className="w-screen h-full p-5">
      <h2 className="text-center mb-3 uppercase tracking-widest font-bold text-sm">
        Trusted by 200+ companies worldwide
      </h2>
      <br />
      <section className="max-w-screen-xl mx-auto">
        <Marquee className="w-full h-full" gradient>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Harvard_University_shield.png/640px-Harvard_University_shield.png"
            alt="harvard"
            className="w-[100px] h-[100px] object-contain mx-16"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tesla_Motors_Logo.svg/640px-Tesla_Motors_Logo.svg.png"
            alt="harvard"
            className="w-[100px] h-[100px] object-contain mx-16"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bolt_Technology_Logo_2019.svg/640px-Bolt_Technology_Logo_2019.svg.png"
            alt="harvard"
            className="w-[100px] h-[100px] object-contain mx-16"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Paystack.png/640px-Paystack.png"
            alt="harvard"
            className="w-[100px] h-[100px] object-contain mx-16"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Toshiba_logo.svg/640px-Toshiba_logo.svg.png"
            alt="harvard"
            className="w-[100px] h-[100px] object-contain mx-16"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/640px-Airbnb_Logo_B%C3%A9lo.svg.png"
            alt="harvard"
            className="w-[100px] h-[100px] object-contain mx-16"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/TMU_logo.svg/640px-TMU_logo.svg.png"
            alt="harvard"
            className="w-[100px] h-[100px] object-contain mx-16"
          />
        </Marquee>
      </section>
    </main>
  );
};

export default Companies;
