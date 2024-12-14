import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/> */}
        <Route path="/About" element={<About/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
