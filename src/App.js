import "./App.css";
import "./styles/globals.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Government from "./pages/Government";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/government" element={<Government />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
