import SearchBar from "../src/components/header/searchBar.jsx";
import HeaderItems from "./components/header/headerItems.jsx";
import Hero from "./components/hero/hero.jsx"
import "./app.css"
import "./Styles/header.css"
import "./Styles/hero.css"


const App = () => {
  return (
    <div className="app-wrapper">
      <SearchBar />
      <HeaderItems />
      <Hero/>
    </div>
  );
};

export default App;
