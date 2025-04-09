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
import LayoutResult from "./Layout/LayoutResult"
import Student from "./Student/Student";
import LayoutBranchList from "./Layout/LayoutBranchList";
import LayoutScheduling from "./Layout/LayoutScheduling";
import LayoutCreateFaculty from "./Layout/LayoutCreateFaculty";
import LayoutViewFaculty from "./Layout/LayoutViewFaculty";
import LayoutEditFaculty from "./Layout/LayoutEditFaculty";
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
        <Route path="/faculty" element={<LayoutCreateFaculty/>}/>
        <Route path="/results" element={<LayoutResult/>}/>
        <Route path="/viewfaculty" element={<LayoutViewFaculty/>}/>
        <Route path="/editfaculty" element={<LayoutEditFaculty/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;