import React from "react";
import SectionName from "./SectionName";
import SectionHeading from "./SectionHeading";
import TextWithCircle from "./TextWithCircle";
import arrowLeft from "../assets/Arrows/arrowLeft.png";
import arrowRight from "../assets/Arrows/arrowRight.png";

interface Props {
  name: string;
  mainDescription: string;
  secondDescription?: string;
  circleText?: string;
  showArrows?: boolean;
}

const ArrowOutlinedByCircle = ({ img }: { img: string }) => (
  <img
    src={img}
    alt="arrow"
    className="p-4 border-2 rounded-full cursor-pointer hover:bg-sixth transition 0.6s"
  />
);

const SectionHeadingWithDescription = ({
  name,
  mainDescription,
  secondDescription,
  circleText,
  showArrows,
}: Props) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-0">
      <div className="md:w-2/3">
        <SectionName name={name} />
        <SectionHeading text={mainDescription} />
      </div>
      <div className="md:w-1/3  md:flex flex-col justify-between">
        <p className="mb-12 text-sixth lg:text-xl">{secondDescription}</p>
        {circleText && <TextWithCircle text={circleText} />}
        {showArrows && (
          <div className="self-end flex gap-2">
            <ArrowOutlinedByCircle img={arrowLeft} />
            <ArrowOutlinedByCircle img={arrowRight} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionHeadingWithDescription;
