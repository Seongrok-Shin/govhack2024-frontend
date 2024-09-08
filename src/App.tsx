import "./css/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./sections/Home";
import CostCalculation from "./sections/CostCalculation";
import GetStarted from "./sections/GetStarted";
import Header from "./components/Header";
import Business from "./sections/Business";
import CostCalculationV2 from "./sections/CostCalculationV2";

function App() {
  return (
    <div>
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/costcalculation" element={<CostCalculation />} />
          <Route path="/costcalculationv2" element={<CostCalculationV2 />} />
          <Route path="/getstarted" element={<GetStarted />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
