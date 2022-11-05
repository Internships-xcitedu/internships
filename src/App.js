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
import SignUp from "./Components/empsignup/Signup";
import Empreg from "./Components/empsignup/Empreg";
import Question from "./Components/Questions/Question";
import Postjob2 from "./Components/PostJob2/PostJob2";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/slider" element={<Slidebar />}>
          <Route index element={<Skills/>}></Route>
          <Route path="details" element={<PersonalDetails/>}></Route>
          <Route path="education" element={<Education/>}></Route>
          <Route path="exprience" element={<Exprience/>}></Route>
          <Route path="certificate" element={<Certificate/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
        </Route>
        <Route path="/postjob2" element={<Postjob2 />} />
          {/* <Route path="/apply" element={<Apply />} /> */}
          <Route path="/question" element={<Question />} />
        <Route path="/signup" element={<SignUp />}/>
      <Route path="/empreg" element={<Empreg/>} />
      </Routes>
    </>
  );
}

export default App;
