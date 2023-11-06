import "bootstrap-icons/font/bootstrap-icons.css";
import SearchBar from "../src/components/header/searchBar.jsx";
import HeaderItems from "./components/header/headerItems.jsx";
import Hero from "./components/hero/hero.jsx";
import PopularPhones from "./components/popularPhones/popularPhone.jsx";
import SuggestedPhones from "./components/suggested/suggestedForYou.jsx";
import EducationalPhones from "./components/educational/educational.jsx";
import CurrentEvents from "./components/currentEvents/CurrentEvents.jsx";
import "./app.css";
import "./Styles/header.css";
import "./Styles/hero.css";
import "./Styles/popularphones.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <SearchBar />
      <HeaderItems />
      <Hero />
      <PopularPhones />
      <SuggestedPhones />
      <EducationalPhones />
      <CurrentEvents />
    </div>
  );
};

export default App;
