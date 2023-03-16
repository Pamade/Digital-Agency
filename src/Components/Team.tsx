import React from "react";

import SectionHeadingWithCircle from "../ReusableComponents/SectionHeadingWithCircle";
const Team = () => {
  return (
    <section className="pt-32 pb-12 bg-customSectionBg">
      <div className="mainWidth">
        <SectionHeadingWithCircle
          name="OUR TEAM"
          mainDescription="Builds Our Future
          Experience Team Members"
          secondDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ."
          circleText="Here will be arrows"
        />
      </div>
    </section>
  );
};

export default Team;
