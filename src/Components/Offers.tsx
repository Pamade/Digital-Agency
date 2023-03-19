import icon1 from "../assets/Offers/icon1.png";
import icon2 from "../assets/Offers/icon2.png";
import icon3 from "../assets/Offers/icon3.png";

const OffersData = [
  {
    name: { first: "Branding", second: "Design" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    list: [
      "Logo Design",
      "Business Card",
      "Social Media",
      "Advertisement",
      "Promotion",
    ],
    icon: icon1,
  },
  {
    name: { first: "Interactive", second: "Design" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    list: [
      "Logo Design",
      "Business Card",
      "Social Media",
      "Advertisement",
      "Promotion",
    ],
    icon: icon2,
  },
  {
    name: { first: "Ilustration", second: "Modelling" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    list: [
      "Logo Design",
      "Business Card",
      "Social Media",
      "Advertisement",
      "Promotion",
    ],
    icon: icon3,
  },
];

const Offers = () => {
  const displayOffers = OffersData.map(({ name, description, list, icon }) => (
    <div key={name.first} className="py-6  md:p-8 md:w-1/2 xl:w-1/3 2xl:p-14">
      <div className="flex flex-col gap-6">
        <div className=" text-center">
          <div className="outlined text-5xl  text-dark-100 xsm:text-6xl">
            <div className="inline-block relative">
              <p>{name.first}</p>
              <img
                src={icon}
                alt="icon"
                className="absolute top-0 -left-12 opacity-90"
              />
            </div>
          </div>
          <div className="flex relative justify-center items-center mt-4  xsm:mt-2">
            <hr className="w-12 bg-white h-12r mr-4"></hr>
            <p className="font-bold text-5xl">{name.second}</p>
          </div>
        </div>
        <h6>{description}</h6>
      </div>
      <ul className="my-6 list-disc">
        {list.map((item) => (
          <li className="font-semibold ml-4" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  ));

  return (
    <section id="offers" className="bg-dark-100 pt-32">
      <div className="mainWidth">
        <div className="flex flex-col justify-between md:flex-row md:gap-0 md:flex-wrap">
          {displayOffers}
        </div>
      </div>
    </section>
  );
};

export default Offers;
