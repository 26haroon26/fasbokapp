import RightSide from "./components/rightside/rightSide"
import LeftSide from "./components/leftside/leftSide";
import Center from "./components/center/center" ;
// import Gaming from "./pages/gaming/gaming";
import Signup from "./signup/signup";
import Login from "./login/login";
import Market from "./pages/market/market";
import Watch from "./pages/watch/watch";
import Contact from "./pages/contact/contact";
import Navbar from "./components/navbar/navbar" ;
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        <LeftSide />
      </div>
        </Router>
    </>
  );
}

export default App;
