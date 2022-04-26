import "./App.css";
import "./styles/globals.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
