import "./styles/globals.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Government from "./pages/Government";
import { ScreenWidthProvider } from "./context/ScreenWidthContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScreenWidthProvider>
          <Header />
        </ScreenWidthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/government/:politician" element={<Government />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
