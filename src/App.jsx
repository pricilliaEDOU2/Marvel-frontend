import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Comicscharacterid from "./pages/Comicscharacterid";

//COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:characterid" element={<Comicscharacterid />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
