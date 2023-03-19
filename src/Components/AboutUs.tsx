import React from "react";
import background from "../assets/AboutUs/bg.png";
import shape1 from "../assets/AboutUs/shape1.png";
import shape2 from "../assets/AboutUs/shape2.png";
import shape3 from "../assets/AboutUs/shape3.png";
import SectionName from "../ReusableComponents/SectionName";
import SectionHeading from "../ReusableComponents/SectionHeading";
import TextWithCircle from "../ReusableComponents/TextWithCircle";

const BoxValues = [
  {
    main: "300+",
    label: "Working Peoples",
  },
  {
    main: "20+",
    label: "World Office",
  },
] as const;

const AboutUs = () => {
  const displayBox = BoxValues.map(({ main, label }) => (
    <div key={main} className="p-1 xsm:p-6 md:p-8 2xl:p-12">
      <p className="font-bold text-xl xsm:text-2xl xl:text-4xl">{main}</p>
      <p className="text-sixth text-sm">{label}</p>
    </div>
  ));

  return (
    <section className="pt-32 bg-customSectionBg" id="about-us">
      <div className="mainWidth max-w-[700px] lg:max-w-none">
        <div className="flex justify-between items-end">
          <SectionName name="ABOUT US" />
          <img src={shape3} alt="shape" className="w-20" />
        </div>
        <SectionHeading text="We Create Digital World Class Business Agency Marketplace" />
        <div className="py-8 lg:flex lg:justify-between">
          <div className="relative mb-24 max-w-[700px] lg:w-3/4">
            <img src={background} alt="background" className="z-10 relative" />
            <div className="absolute -bottom-12 -right-5  bg-customGray grid grid-cols-2 grid-rows-1 gap-4 z-20 2xl:-right-60">
              {displayBox}
            </div>
            <img
              src={shape1}
              alt="shape"
              className="absolute -top-8 -right-10 z-0 w-20 2xl:w-44 2xl:-top-16 2xl:-right-16"
            />
            <img
              src={shape2}
              alt="shape"
              className="absolute -bottom-4 -left-5 z-20  w-16 2xl:w-44 2xl:-left-16"
            />
          </div>
          <div className="text-sm text-sixth lg:w-1/5 xl:text-base 2xl:w-3/5 2xl:ml-24  2xl:text-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore.
            </p>
            <p className="py-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <TextWithCircle text="LEARN MORE" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
