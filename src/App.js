import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Forgot from "./Auth/Forgot";
import LayoutDashboard from "./Layout/LayoutDashboard";
import LayoutCourse from "./Layout/LayoutCourse";
// import LayoutStudent from "./Layout/LayoutStudent";
import LayoutAssignment from "./Layout/LayoutAssignment";
import LayoutExam from "./Layout/LayoutExam";
import LayoutFinance from "./Layout/LayoutFinance";
import LayoutFaculty from "./Layout/LayoutFaculty";
// import Student from "./Student/Student";
// import LayoutBranchList from "./Layout/LayoutBranchList";
// import LayoutScheduling from "./Layout/LayoutScheduling";
import LayoutTimeTable from "./Layout/LayoutTimeTable";
import LayoutAllStudents from "./Layout/LayoutAllStudents";  //AllStudent
import LayoutCertificates from "./Layout/LayoutCertificates";  //Certificates
// import LayoutCertificates from "./Layout/LayoutCertificates";
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
        <Route path="/student/all-students" element={<LayoutAllStudents />} />
        <Route path="/student/certificates" element={<LayoutCertificates />} />
        <Route path="/exam" element={<LayoutExam />} />
        <Route path="/finance" element={<LayoutFinance />} />
        <Route path="/teacher" element={<LayoutFaculty />} />
        {/* <Route path="/scheduling" element={<LayoutScheduling />} /> */}
        <Route path="/scheduling/time-table" element={<LayoutTimeTable />} />
        {/* <Route path="/student/all-students" element={<LayoutAllStudents />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;