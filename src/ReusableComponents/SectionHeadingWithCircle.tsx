import React from "react";
import SectionName from "./SectionName";
import SectionHeading from "./SectionHeading";
import TextWithCircle from "./TextWithCircle";

interface Props {
  name: string;
  mainDescription: string;
  secondDescription: string;
  circleText: string;
}

const SectionHeadingWithCircle = ({
  name,
  mainDescription,
  secondDescription,
  circleText,
}: Props) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-0">
      <div className="md:w-2/3">
        <SectionName name={name} />
        <SectionHeading text={mainDescription} />
      </div>
      <div className="md:w-1/3  md:flex flex-col justify-between">
        <p className="mb-12 text-sixth lg:text-xl">{secondDescription}</p>
        <TextWithCircle text={circleText} />
      </div>
    </div>
  );
};

export default SectionHeadingWithCircle;
