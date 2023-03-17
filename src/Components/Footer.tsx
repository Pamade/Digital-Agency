import React from "react";
import phone from "../assets/Footer/phone.png";

const Links = [
  "About Us",
  "Pricing Table",
  "Contact Us",
  "Meet Our Team",
  "Latest News",
];

const Links2 = ["Case Studies", "FAQ`s", "Services", "Customer Product"];

const Footer = () => {
  return (
    <div className="py-32 bg-customSectionBg">
      <div className="mainWidth">
        <div>
          <p className="text-sixth">
            Lorem ipsum dolor sit amet consecte tur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua tepo the.
          </p>
          <div className="flex px-2 py-4 my-6 gap-4 bg-third ">
            <img src={phone} alt="phone" />
            <span>(973) 068 2300</span>
          </div>
        </div>
        <div>
          <h6 className="font-bold">QUICK LINKS</h6>
          <ul className="flex justify-between my-4">
            <div>
              {Links.map((link) => (
                <li className="text-sixth" key={link}>
                  {link}
                </li>
              ))}
            </div>
            <div>
              {Links2.map((link) => (
                <li className="text-sixth" key={link}>
                  {link}
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
