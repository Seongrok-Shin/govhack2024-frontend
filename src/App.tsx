import './css/App.css';
import {HashRouter, Routes, Route} from 'react-router-dom'

//Pages
import Home from './sections/Home';
import CostCalculation from './sections/CostCalculation';
import GetStarted from './sections/GetStarted';

function App() {
  return (
    <div className="App">
     <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/costcalculation' element={<CostCalculation/>} />
        <Route path='/getstarted' element={<GetStarted />} />
      </Routes>
     </HashRouter>
    </div>
  );
}

export default App;
