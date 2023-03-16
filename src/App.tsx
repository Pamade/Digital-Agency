import AboutUs from "./Components/AboutUs";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Offers from "./Components/Offers";
import Portfolio from "./Components/Portfolio";
import Team from "./Components/Team";
const App = () => {
  return (
    <div className="bg-background text-fourth overflow-x-hidden">
      <Navigation />
      <Header />
      <AboutUs />
      <Offers />
      <Portfolio />
      <Team />
    </div>
  );
};

export default App;
