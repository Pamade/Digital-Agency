import AboutUs from "./Components/AboutUs";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Offers from "./Components/Offers";
const App = () => {
  return (
    <div className="bg-background text-fourth overflow-x-hidden">
      <Navigation />
      <Header />
      <AboutUs />
      <Offers />
    </div>
  );
};

export default App;
