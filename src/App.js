import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Courses from "./components/Courses";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Request from "./components/Request";
import About from "./components/About";
import Forgetpassword from "./components/Forgetpassword";
import Subscribe from "./components/payment/Subscribe";
import Paymentsuccess from "./components/payment/Paymentsuccess";
import Paymentfail from "./components/payment/Paymentfail";
import Notfound from "./components/payment/Notfound";
import CoursePage from "./components/Courses/CoursePage";
import Profile from "./components/Profile";
import Changepassword from "./components/Changepassword";
import Updateprofile from "./components/Updateprofile";


// AdminRoute
import Dashboard from "../src/components/admin/dashboard/Dashboard";
import Createcourses from "../src/components/admin/createcourses/Createcourses";
import AdminCourses from "../src/components/admin/admincourses/AdminCourses";
import Users from "../src/components/admin/users/Users";


function App() {
  return (
    <>
      {/* <BrowserRouter> */}
        <Nav />
      {/* <Side/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/CoursePage" element={<CoursePage />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Request" element={<Request/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Forgetpassword" element={<Forgetpassword/>}/>
          <Route path="/Changepassword" element={<Changepassword/>}/>
          <Route path="/Updateprofile" element={<Updateprofile/>}/>
          <Route path="/Subscribe" element={<Subscribe/>}/>
          <Route path="/Paymentsuccess" element={<Paymentsuccess/>}/>
          <Route path="/Paymentfail" element={<Paymentfail/>}/>
          <Route path="*" element={<Notfound/>}/>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/createcourses" element={<Createcourses />}/>
          <Route path="/admin/admincourses" element={<AdminCourses />}/>
          <Route path="/admin/users" element={<Users />}/>
          
        </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
