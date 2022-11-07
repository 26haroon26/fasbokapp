import RightSide from "./rightSide";
import LeftSide from "./leftSide";
import Center from "./center";
import Gaming from "./gaming";
import Market from "./market";
import Watch from "./watch";
import Contact from "./contact";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import "./App.css";
import "./toggle.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [lit, setlit] = useState(true);
  const backColor = lit ? "normal" : "hard";
  const textColor = lit ? "light" : "dark";
  // const buttonColor = lit ? 'solid' : 'liquid';
  const imgsrc = lit ? "sun" : "moon";

  useEffect(() => {
    localStorage.setItem("class", `${lit}`);
  });
  let colorChanger = () => {
    setlit(!lit);
    localStorage.setItem("class", `${!lit}`);
  };

  return (
    <>
        <Router>
      <div className={`top ${textColor} ${backColor} `}>
        <button className="btnChanger" onClick={colorChanger}>
          <img className="sunMoon" src={`./images/${imgsrc}.png`} alt="aaaa" />
        </button>
        <Navbar />
      </div>

      <div className={`bottom  ${backColor} ${textColor}`}>
        <RightSide />
          {/* <div className="ForLinks">
            <Link to="/">Home</Link>
            <Link to="/watch">Watch</Link>
            <Link to="/contact">contact</Link>
          </div> */}
          <Routes>
            <Route index element={<Center />} />
            <Route exact path="/watch" element={<Watch />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/gaming" element={<Gaming />} />
            <Route exact path="/market" element={<Market />} />
          </Routes>
        <LeftSide />
      </div>
        </Router>
    </>
  );
}

export default App;
