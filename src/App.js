import TopLeftDiv from "./topComponent/TopLeftDiv";
import TopRightDiv from "./topComponent/TopRightDiv";
import Products from "./centerComponent/Products";
import Footer from "./bottomComponent/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <div className="topdivs">
        <TopLeftDiv />
        <TopRightDiv />
      </div>
      <Products />
      <Footer />
    </div>
  );
}

export default App;
