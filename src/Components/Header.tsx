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

import shape1 from "../assets/shape1.png";

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
    <div key={value} className="flex-col p-2 lg:p-1 2xl:py-4">
      <h4 className="font-bold xsm:text-4xl lg:text-sm xl:text-2xl 2xl:text-5xl">
        {value}
      </h4>
      <h6 className="lg:text-sm">{label}</h6>
    </div>
  ));

  const displayParnters = partners.map((partner) => (
    <img
      key={String(partner)}
      src={partner}
      alt="partner"
      className="scroll mx-4"
    />
  ));

  return (
    <header className="min-h-screen py-navHeight w-5/6 mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="my-4 xsm:w-3/4 lg:mr-12 relative xl:my-12">
          <h1 className="text-5xl mb-4 lg:text-6xl xl:text-8xl xl:w-3/4 2xl:text-9xl ">
            Digital Agency Solution
          </h1>
          <p className="text-light text-sm lg:text-xl lg:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img
            src={shape1}
            alt="shape"
            className="hidden lg:block absolute lg:-top-20 lg:-left-5  xl:-top-12 2xl:-top-8 "
          />
        </div>
        <div className=" bg-dark-200 lg:w-1/2 ">
          <div className="xsm:flex">
            <div className="relative mb-32 xsm:h-[500px] md:w-3/4 lg:h-full lg:mb-0">
              <img
                src={background}
                className="xsm:h-[500px] object-cover md:w-full lg:h-full"
                alt="background"
              />
              <img
                src={playButton}
                alt="play"
                className="absolute bottom-0 right-1/2 transform translate-y-1/2 translate-x-1/2 lg:bottom-1/2 lg:left-0 lg:-translate-x-1/2 "
              />
            </div>
            <div className=" items-center xsm:my-16 md:my-1/2 md:w-1/4 md:ml-8 lg:my-0 lg:flex">
              <div className="grid grid-rows-2 grid-cols-2 gap-4 xsm:grid-cosl-4 xsm:grid-cols-1">
                {displayAchievments}
              </div>
              <div className="flex flex-col items-center xsm:hidden">
                <PeopleRegistered />
              </div>
            </div>
          </div>
          <div className="hidden items-center xsm:flex ml-12 xsm:w-6/5 md:w-3/4  md:ml-6 lg:w-full 2xl:w-3/4">
            <PeopleRegistered />
          </div>
        </div>
      </div>
      <div className="flex pt-32 pb-10 overflow-x-auto mx-auto justify-between 2xl:w-3/4">
        {displayParnters}
      </div>
    </header>
  );
};

const PeopleRegistered = () => {
  const displayPersons = persons.map((person) => (
    <img
      key={String(person)}
      src={person}
      alt="person"
      className="-mx-2 lg:w-14 xl:w-16 xl:h-16"
    />
  ));
  return (
    <>
      <div className="flex my-4">{displayPersons}</div>
      <div className="flex-col items-center mx-auto 2xl:ml-14">
        <p className="font-bold md:text-lg lg:text-sm">240 Business People</p>
        <p className="text-light">Already registered</p>
      </div>
    </>
  );
};

export default Header;
