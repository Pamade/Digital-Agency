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
    <div className="pt-32 bg-dark-300">
      <div className="mainWidth ">
        <div className="justify-between md:flex md:gap-12">
          <div className=" md:w-1/2 lg:w-1/4 ">
            <p className="text-gray">
              Lorem ipsum dolor sit amet consecte tur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua tepo
              the.
            </p>
            <div className="inline-block px-2 py-3 my-6 gap-4 bg-orange">
              <img src={phone} alt="phone" className="inline mr-4" />
              <span>(973) 068 2300</span>
            </div>
          </div>
          <div className="pb-12">
            <h6 className="font-bold">QUICK LINKS</h6>
            <ul className="flex justify-between my-4">
              <div>
                {Links.map((link) => (
                  <li className="text-gray" key={link}>
                    {link}
                  </li>
                ))}
              </div>
              <div className="mx-6">
                {Links2.map((link) => (
                  <li className="text-gray" key={link}>
                    {link}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-gray pt-6 flex justify-between text-gray pb-6 text-xs ">
          <p>@ 2023 Patryk Mikołajczak</p>
          <div className="flex gap-2  md:gap-12 ">
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
