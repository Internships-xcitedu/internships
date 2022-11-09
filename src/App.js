import "./App.css";
import { Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Exprience from "./Components/DynamicComponents/Exprience";
import Slidebar from "./Components/DynamicComponents/Slidebar";
import Skills from "./Components/DynamicComponents/Skills";
import PersonalDetails from "./Components/DynamicComponents/PersonalDetails";
import Education from "./Components/DynamicComponents/Education";
import Certificate from "./Components/DynamicComponents/Certificate";
import Profile from "./Components/DynamicComponents/Profile";
import Login from "./Components/Login/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/slider" element={<Slidebar />}>
          <Route index element={<Skills/>}></Route>
          <Route path="details" element={<PersonalDetails/>}></Route>
          <Route path="education" element={<Education/>}></Route>
          <Route path="exprience" element={<Exprience/>}></Route>
          <Route path="certificate" element={<Certificate/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
