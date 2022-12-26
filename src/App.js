import { Route, Routes } from "react-router-dom";
import "./App.css";
import Apply from "./Components/Apply/Apply";
import Certificate from "./Components/DynamicComponents/Certificate";
import Education from "./Components/DynamicComponents/Education";
import Exprience from "./Components/DynamicComponents/Exprience";
import PersonalDetails from "./Components/DynamicComponents/PersonalDetails";
import Profile from "./Components/DynamicComponents/Profile";
import Skills from "./Components/DynamicComponents/Skills";
import Slidebar from "./Components/DynamicComponents/Slidebar";
import Empreg from "./Components/empsignup/Empreg";
import SignUp from "./Components/empsignup/Signup";
import ForEmployers from "./Components/ForEmployers/ForEmployers";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
// import Navbar from "./Components/PostJob2/Navbar";
import JobSearch from "./Components/JobSearch/JobSearch";
import Postjob1 from "./Components/PostJob1/Postjob1";
import Postjob2 from "./Components/PostJob2/PostJob2";
import Question from "./Components/Questions/Question";
import Register from "./Components/Register/Register";
import UserProfile from "./Components/UserProfile/UserProfile";

import Chat from "./Components/Chat/Chat";

import ViewApplication from "./Components/ViewApplication/ViewApplication";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forEmployers" element={<ForEmployers />}></Route>
        <Route path="/jobsearch" element={<JobSearch />} />
        <Route path="/slider" element={<Slidebar />}>
          <Route index element={<PersonalDetails />}></Route>
          <Route path="skills" element={<Skills />}></Route>
          <Route path="education" element={<Education />}></Route>
          <Route path="exprience" element={<Exprience />}></Route>
          <Route path="certificate" element={<Certificate />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route path="/postjob2" element={<Postjob2 />} />
        <Route path="/postjob1" element={<Postjob1 />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/viewApplication" element={<ViewApplication />} />
        {/* <Route path="/navbar" element={<Navbar />} /> */}

        <Route path="/question" element={<Question />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/empreg" element={<Empreg />} />

        <Route path="/chat" element={<Chat/>}/>

        <Route path="/userprofile" element={<UserProfile />} />

      </Routes>
    </>
  );
}

export default App;
