import arrow from "../assets/Portfolio/arrow.png";
import arrowTop from "../assets/Portfolio/arrow-top.png";
import people from "../assets/Portfolio/people.png";

import SectionHeadingWithDescription from "../ReusableComponents/SectionHeadingWithDescription";

const list = [
  "Web & Mobile Development",
  "Interaction Design",
  "Digital Marketing",
  "Branding & Strategy",
];

const ArrowIcon = ({ icon }: { icon: string }) => {
  return (
    <img src={icon} alt="arrow" className="w-4 h-4 lg:w-8 lg:h-8 lg:ml-2" />
  );
};

const Portfolio = () => {
  const displayList = list.map((item, index) => (
    <li
      key={index}
      className="border-b-2 py-4 font-bold flex justify-between items-center lg:py-12"
    >
      <div className="flex items-center">
        <span className="mb-4 font-normal text-xs text-gray 2xl:mb-14">
          0{index + 1}.
        </span>
        <span className="ml-2 md:text-4xl lg:text-6xl 2xl:text-7xl">
          {item}
        </span>
      </div>
      {index === 1 ? <ArrowIcon icon={arrowTop} /> : <ArrowIcon icon={arrow} />}
    </li>
  ));

  return (
    <section id="portfolio" className="pt-32 pb-12 bg-dark-300">
      <div className="mainWidth">
        <SectionHeadingWithDescription
          name="PORTFOLIO"
          mainDescription="We create places that
          connect, sustain & inspire"
          secondDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          circleText="VIEW ALL PORTFOLIO"
        />
        <ul className="py-16 relative">
          {displayList}
          <img
            src={people}
            alt="people"
            className="absolute right-0 -bottom-16 w-32 h-32 xsm:bottom-32 xsm:right-16 md:w-48 md:h-48 md:bottom-24 lg:bottom-60 xl:w-80 xl:h-80"
          />
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
