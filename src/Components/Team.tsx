import React from "react";
import SectionHeadingWithDescription from "../ReusableComponents/SectionHeadingWithDescription";
import person1 from "../assets/Team/person1.png";
import person2 from "../assets/Team/person2.png";
import person3 from "../assets/Team/person3.png";

const persons = [
  {
    name: "Aimee Calderon",
    role: "Web Developer",
    img: person1,
  },
  {
    name: "Raymond Horn",
    role: "Marketer",
    img: person2,
  },
  {
    name: "Linda Town",
    role: "App Designer",
    img: person3,
  },
];

const Team = () => {
  const displayPersons = persons.map(({ name, role, img }) => (
    <div key={name}>
      <img src={img} alt="person" className="" />
      <h5 className="mt-4 font-bold text-xl">{name}</h5>
      <p className="text-sm">{role}</p>
    </div>
  ));

  return (
    <section id="team" className="pt-32 pb-12 bg-customSectionBg">
      <div className="mainWidth">
        <SectionHeadingWithDescription
          name="OUR TEAM"
          mainDescription="Builds Our Future
          Experience Team Members"
          secondDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ."
          showArrows
        />
        <div className="py-24 flex flex-col gap-8 items-center md:flex-row md:justify-between">
          {displayPersons}
        </div>
      </div>
    </section>
  );
};

export default Team;
