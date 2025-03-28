import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Forgot from "./Auth/Forgot";
import LayoutDashboard from "./Layout/LayoutDashboard";
import LayoutCourse from "./Layout/LayoutCourse";
import LayoutStudent from "./Layout/LayoutStudent";
import LayoutAssignment from "./Layout/LayoutAssignment";
import LayoutExam from "./Layout/LayoutExam";
import LayoutFinance from "./Layout/LayoutFinance";
import LayoutFaculty from "./Layout/LayoutFaculty";
import Student from "./Student/Student";
import LayoutBranchList from "./Layout/LayoutBranchList";
import LayoutScheduling from "./Layout/LayoutScheduling";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/" element={<LayoutDashboard/>}/>
        <Route path="/forgot-password" element={<Forgot />}/>
        <Route path="/course/all-courses" element={<LayoutCourse/>}/>
        <Route path="/student/all-students" element={<LayoutStudent/>}/>
        <Route path="/assignment/all-assignments" element={<LayoutAssignment/>}/>
        <Route path="/exam" element={<LayoutExam/>}/>
        <Route path="/finance" element={<LayoutFinance/>}/>
        <Route path="/teacher" element={<LayoutFaculty/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;