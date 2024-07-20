import './dist/styles.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/" element={<About />} />
        <Route index path="/" element={<Menu />} />
        <Route index path="/" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
