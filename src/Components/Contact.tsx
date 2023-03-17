import img from "../assets/Contact/bg.png";
import arrow from "../assets/Contact/arrow.png";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-end pt-32 bg-customSectionBg relative">
        <div className="">
          <img src={img} alt="" />
        </div>
        <div className="absolute -bottom-60 bg-secondary left-0 w-11/12 p-6 flex flex-col justify-between items-center gap-4 xsm:flex-row xsm:-bottom-32 lg:px-24 xl:px-48">
          <p className="font-bold text-center py-4 xsm:text-xl xsm:text-left md:text-5xl md:mr-32 lg:w-3/4 2xl:text-8xl">
            Let’s Make Something Great
            <span className="text-third"> Together!</span>
          </p>
          <div>
            <div className="flex flex-col gap-2 items-center w-40  justify-center h-40 border-2 border-third bg-third rounded-full xsm:w-[150px] xsm:h-[150px] xsm:p-2 2xl:w-[225px] 2xl:h-[225px] cursor-pointer hover:bg-orange-300 transition-all">
              <p className="text-center font-bold">CONTACT WITH US</p>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>

        {/* </section> */}
      </div>
      <div className="pt-64 bg-customGray"></div>
    </div>
  );
};

export default Contact;
