import React from "react";
import SectionHeading from "../ReusableComponents/SectionHeading";
import SectionName from "../ReusableComponents/SectionName";
import TextWithCircle from "../ReusableComponents/TextWithCircle";

const Portfolio = () => {
  return (
    <section className="pt-32 pb-12 bg-customSectionBg">
      <div className="mainWidth">
        <div className="flex flex-col gap-6 md:flex-row md:gap-0">
          <div className="md:w-2/3">
            <SectionName name="PORTFOLIO" />

            <SectionHeading
              text="We create places that
          connect, sustain & inspire"
            />
          </div>
          <div className="md:w-1/3  md:flex flex-col justify-between">
            <p className="mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <TextWithCircle text="VIEW ALL PORTFOLIO" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
