import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Offers from "./Components/Offers";
import Portfolio from "./Components/Portfolio";
import Team from "./Components/Team";
import Testimonials from "./Components/Testimonials";
import Updates from "./Components/Updates";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div className="bg-background text-fourth overflow-x-hidden">
      <Navigation />
      <Header />
      <AboutUs />
      <Offers />
      <Portfolio />
      <Team />
      <Testimonials />
      <Updates />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
