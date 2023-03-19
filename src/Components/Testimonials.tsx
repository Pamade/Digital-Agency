import SectionHeadingWithDescription from "../ReusableComponents/SectionHeadingWithDescription";
import border from "../assets/Testimonials/border.png";
import person1 from "../assets/Testimonials/person1.png";
import person2 from "../assets/Testimonials/person2.png";
import quote from "../assets/Testimonials/quote.png";

import shape1 from "../assets/shape1.png";

interface Props {
  text: string;
  name: string;
  img: string;
}

const QuoteBox = ({ text, name, img }: Props) => (
  <div className="[max-width:569px]">
    <blockquote className="border-l-4 border-l-third border-b-6">
      <p className="ml-4 lg:text-2xl">{text}</p>
    </blockquote>
    <img src={border} alt="border" className="my-2 lg:my-6" />
    <div className="flex items-center gap-4 my-4">
      <img src={img} alt="person" />
      <div>
        <div>
          <p className="font-bold text-2xl">{name}</p>
          <p className="text-third">CUSTOMER</p>
        </div>
      </div>
      <img
        src={quote}
        className="ml-4 xsm:ml-16 md:ml-2 xl:ml-32"
        alt="quote"
      />
    </div>
  </div>
);
const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-12 bg-customSectionBg">
      <div className="mainWidth relative">
        <img
          src={shape1}
          alt=""
          className="absolute -top-16 -left-5 xl:-left-16"
        />
        <SectionHeadingWithDescription
          name="TESTIMONIALS"
          mainDescription="Feedback From Our Clients"
          showArrows
        />
        <div className="flex flex-col justify-between py-12 italic gap-24 md:flex-row">
          <QuoteBox
            text={
              '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete."'
            }
            name="Chester Feil"
            img={person1}
          />
          <QuoteBox
            text={
              '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete."'
            }
            name="Malina Willans"
            img={person2}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
