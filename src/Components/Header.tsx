import React from "react";
import background from "../assets/Header/headerMain.png";
import person1 from "../assets/Header/person1.png";
import person2 from "../assets/Header/person2.png";
import person3 from "../assets/Header/person3.png";
import playButton from "../assets/Header/playButton.png";
import partner1 from "../assets/Header/partner1.png";
import partner2 from "../assets/Header/partner2.png";
import partner3 from "../assets/Header/partner3.png";
import partner4 from "../assets/Header/partner4.png";
import partner5 from "../assets/Header/partner5.png";
import partner6 from "../assets/Header/partner6.png";

const achievments = [
  {
    value: "12k+",
    label: "Project Complete",
  },
  { value: "7k+", label: "Happy Client" },
  { value: "10+", label: "Years Experience" },
  { value: "270+", label: "Win Awards" },
] as const;

const persons = [person1, person2, person3] as const;

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
] as const;

const Header = () => {
  const displayAchievments = achievments.map(({ value, label }) => (
    <div key={value} className="flex-col p-2">
      <h4 className="font-bold text-2xl">{value}</h4>
      <h6>{label}</h6>
    </div>
  ));

  const displayParnters = partners.map((partner) => (
    <img
      key={String(partner)}
      src={partner}
      alt="partner"
      className="mx-5 scroll"
    />
  ));
  // const displayPartners =

  return (
    <header className="min-h-screen py-navHeight w-5/6 mx-auto">
      <div className="flex flex-col lg:grid grid-cols-2 items-center">
        {/* <div className="xsm:flex flex"></div> */}
        <div className="my-4 ">
          <h1 className="text-5xl mb-4 lg:text-8xl">Digital Agency Solution</h1>
          <p className="text-fifth text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="pb-8 bg-secondary xsm:flex lg:flex">
          <div className="relative mb-32 xsm:h-[500px]  lg:h-full">
            <img
              src={background}
              className="xsm:h-[500px] object-cover lg:h-full w-full"
              alt="background"
            />
            <img
              src={playButton}
              alt="play"
              className="absolute bottom-0 right-1/2 transform translate-y-1/2 translate-x-1/2 "
            />
          </div>
          <div className="xsm:my-16">
            <div className="grid grid-rows-2 grid-cols-2 gap-4 xsm:grid-cosl-4 grid-cols-1">
              {displayAchievments}
            </div>
            <div className="flex flex-col items-center xsm:hidden"></div>
          </div>
          {/* ^ right side  */}
        </div>
      </div>
      <div className="flex py-8 px-5 overflow-x-auto">{displayParnters}</div>
    </header>
  );
};

const PeopleRegistered = () => {
  const displayPersons = persons.map((person) => (
    <img key={String(person)} src={person} alt="person" className="-mx-2" />
  ));
  return (
    <>
      <div className="flex my-4">{displayPersons}</div>
      <div className="flex-col items-center mx-auto">
        <p>240 Business People</p>
        <p className="text-fifth">Already registered</p>
      </div>
    </>
  );
};

export default Header;
