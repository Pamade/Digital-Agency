import SectionHeadingWithDescription from "../ReusableComponents/SectionHeadingWithDescription";

interface Props {
  type: string;
  date: string;
  value: string;
}

const UpdateBox = ({ type, date, value }: Props) => (
  <div className="md:w-2/5 xl:my-6">
    <div className="text-sm mb-2">
      <span className="text-sixth">{type} |</span>
      <span className="text-third"> {date}</span>
    </div>
    <h5 className="text-4xl font-bold xl:text-5xl">{value}</h5>
  </div>
);

const Updates = () => {
  return (
    <section className="pt-32 pb-12 bg-customSectionBg">
      <div className="mainWidth">
        <SectionHeadingWithDescription
          name="LATEST UPDATES"
          mainDescription="Check Some of Our
          Latest Update Blog "
          secondDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ."
          circleText="VIEW ALL BLOG"
        />
        <div className="flex flex-col my-12 gap-12 md:flex-row flex-wrap md:justify-between relative">
          <UpdateBox
            type="UI Design"
            date="15 Dec 2022"
            value="What is Digital Agency
          Marketing"
          />
          <UpdateBox
            type="Business"
            date="12 May 2022"
            value="Support During the
          Exponential Growth"
          />
          <UpdateBox
            type="Marketing"
            date="21 Mar 2022"
            value="A Simple Social Media
          Marketing Checklist"
          />
          <UpdateBox
            type="Marketing"
            date="08 Sep 2022"
            value="The Importance of Making
          Content Right Now"
          />
        </div>
      </div>
    </section>
  );
};

export default Updates;
