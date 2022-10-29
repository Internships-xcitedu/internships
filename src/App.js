// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apply from "./Components/Apply/Apply";
import Postjob2 from "./Components/PostJob2/PostJob2";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={"please make a new folder for yourself"} />
          <Route path="/postjob2" element={<Postjob2 />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
