import { useState, useLayoutEffect } from "react";

interface Links {
  label: string;
  path: string;
}

const links: Readonly<Links[]> = [
  { label: "ABOUT US", path: "about-us" },
  { label: "OFFERS", path: "offers" },
  { label: "PORTFOLIO", path: "portfolio" },
  { label: "TEAM", path: "team" },
  { label: "TESTIMONIALS", path: "testimonials" },
  { label: "UPDATES", path: "updates" },
  { label: "CONTACT", path: "contact" },
] as const;

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollIntoView = (path: Links["path"]) => {
    const view = document.getElementById(path);
    setIsNavOpen(false);
    view?.scrollIntoView({ behavior: "smooth" });
  };
  const displayLinks = links.map(({ label, path }) => (
    <li
      key={label}
      onClick={() => scrollIntoView(path)}
      className="text-white text-sm md:hover:text-third md:text-md border-b-2 font-semibold md:border-none lg:text-lg"
    >
      {label}
    </li>
  ));

  return (
    <>
      <div className="h-navHeight fixed flex w-screen bg-background z-50 border-b-2 border-third">
        <div className="flex justify-between  mainWidth mx-auto items-center">
          {!isNavOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 md:hidden"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 transition-3s md:hidden"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <path
                className="rotate-32"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}

          <ul className="hidden md:flex md:flex-row md:gap-3 lg:gap-6">
            {displayLinks}
          </ul>
        </div>
        {isNavOpen && (
          <ul className="absolute top-full w-9/12 bg-third left-1/2 -translate-x-1/2 md:hidden z-60 flex p-2 flex-col gap-2">
            {displayLinks}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navigation;
