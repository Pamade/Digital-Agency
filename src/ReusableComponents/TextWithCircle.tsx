import React from "react";

const TextWithCircle = ({ text }: { text: string }) => {
  return (
    <div className="relative cursor-pointer">
      <div className="absolute w-12 h-12 rounded-full bg-customGray z-0 top-1/2 transform -translate-y-1/2 "></div>
      <p className="z-10 relative text-fourth font-semibold ml-4 tracking-wider">
        {text}
      </p>
    </div>
  );
};

export default TextWithCircle;
