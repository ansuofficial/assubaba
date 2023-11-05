import SearchBar from "../src/components/header/searchBar.jsx";
import HeaderItems from "./components/header/headerItems.jsx";
import Hero from "./components/hero/hero.jsx";
import PopularPhones from "./components/popularPhones/popularPhone.jsx";
import "./app.css";
import "./Styles/header.css";
import "./Styles/hero.css";
import "./Styles/popularphones.css"

const App = () => {
  return (
    <div className="app-wrapper">
      <SearchBar />
      <HeaderItems />
      <Hero />
      <PopularPhones />
    </div>
  );
};

export default App;
