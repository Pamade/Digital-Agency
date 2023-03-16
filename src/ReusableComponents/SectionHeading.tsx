import React from "react";

const SectionHeading = ({ text }: { text: string }) => {
  return (
    <div className="md:w-4/5 lg:w-4/5 ">
      <h2 className="font-bold text-2xl my-6 md:text-3xl lg:text-4xl xl:text-5xl">
        {text}
      </h2>
    </div>
  );
};

export default SectionHeading;
