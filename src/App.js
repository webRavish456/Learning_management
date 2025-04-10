import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Forgot from "./Auth/Forgot";
import LayoutDashboard from "./Layout/LayoutDashboard";
import LayoutCourse from "./Layout/LayoutCourse";
import LayoutAssignment from "./Layout/LayoutAllAssignment";   //edit
import LayoutExam from "./Layout/LayoutExam";
import LayoutFaculty from "./Layout/LayoutFaculty";
import LayoutTimeTable from "./Layout/LayoutTimeTable";
import LayoutAllStudents from "./Layout/LayoutAllStudents";  //AllStudent
import LayoutCertificates from "./Layout/LayoutCertificates";  //Certificates
import LayoutResult from "./Layout/LayoutResult"
import LayoutBranchList from "./Layout/LayoutBranchList";  //edit
import LayoutCreateFaculty from "./Layout/LayoutCreateFaculty";
import LayoutViewFaculty from "./Layout/LayoutViewFaculty";
import LayoutEditFaculty from "./Layout/LayoutEditFaculty";
import LayoutStudentsAssignment from "./Layout/LayoutStudentsAssignment";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<LayoutDashboard />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/course/all-courses" element={<LayoutCourse />} />
        {/* <Route path="/student/certificates" element={<LayoutCertificates />} /> */}
        <Route path="/assignment/all-assignments" element={<LayoutAssignment />} />
        <Route path="/assignment/students-assignment" element={<LayoutStudentsAssignment />} />
        <Route path="/student/all-students" element={<LayoutAllStudents />} />
        <Route path="/student/certificates" element={<LayoutCertificates />} />
        <Route path="/exam" element={<LayoutExam />} />
        <Route path="/teacher" element={<LayoutFaculty />} />
        <Route path="/branch/branch-list" element={<LayoutBranchList/>} />   
        <Route path="/scheduling/time-table" element={<LayoutTimeTable />} />
        <Route path="/faculty" element={<LayoutCreateFaculty />} />
        <Route path="/results" element={<LayoutResult />} />
        <Route path="/viewfaculty" element={<LayoutViewFaculty />} />
        <Route path="/editfaculty" element={<LayoutEditFaculty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;